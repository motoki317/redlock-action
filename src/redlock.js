const { lockDuration } = require('./heartbeat')
const { getClients, round, sleep } = require('./utils')
const child_process = require('node:child_process')
const path = require('node:path')
const fs = require('node:fs')
const { default: Redlock } = require('redlock')
const core = require('@actions/core')

const validActions = ['auto', 'lock', 'unlock']

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run() {
  const isPost = !!core.getState('isPost')
  if (!isPost) {
    // Save state for later usage by post step
    core.saveState('isPost', 'true')
  }

  const action = core.getInput('action')
  if (!validActions.includes(action)) {
    return core.setFailed(
      `"action" should specify one of ${validActions.join(', ')}`
    )
  }
  if (isPost && action !== 'auto') {
    // No action to perform on post step if not 'auto' - so early return
    core.info('Nothing to cleanup.')
    return
  }

  const hostsStr = core.getInput('hosts')
  if (hostsStr === '') {
    return core.setFailed(`"hosts" should include at least 1 host`)
  }

  let name = core.getInput('name')
  if (name === '') {
    return core.setFailed('"name" of the lock must be specified')
  }

  const concurrencyStr = core.getInput('concurrency')
  if (!Number.isInteger(+concurrencyStr) || Number(concurrencyStr) <= 0) {
    return core.setFailed(`"concurrency" should be a positive integer`)
  }
  const concurrency = +concurrencyStr

  const retryCountStr = core.getInput('retry-count')
  if (!Number.isInteger(+retryCountStr) || Number(retryCountStr) <= 0) {
    return core.setFailed(`"retry-count" should be a positive integer`)
  }
  const retryCount = Number(retryCountStr)

  const retryDelayMsStr = core.getInput('retry-delay-ms')
  if (!Number.isInteger(+retryDelayMsStr) || Number(retryDelayMsStr) <= 0) {
    return core.setFailed(`"retry-delay-ms" should be a positive integer`)
  }
  const retryDelayMs = Number(retryDelayMsStr)

  const retryJitterMsStr = core.getInput('retry-jitter-ms')
  if (!Number.isInteger(+retryJitterMsStr) || Number(retryJitterMsStr) <= 0) {
    return core.setFailed(`"retry-jitter-ms" should be a positive integer`)
  }
  const retryJitterMs = Number(retryJitterMsStr)

  const durationSecondsStr = core.getInput('duration-seconds')
  if (
    !Number.isInteger(+durationSecondsStr) ||
    Number(durationSecondsStr) <= 0
  ) {
    return core.setFailed(`"duration-seconds" should be a positive integer`)
  }

  const hosts = hostsStr.split(',').map(e => e.trim())
  const clients = getClients(hosts)
  const redlock = new Redlock(clients)

  try {
    if ((action === 'lock' && !isPost) || (action === 'auto' && !isPost)) {
      // Acquire first lock
      let lockName
      let lock
      try {
        core.info(`Trying to acquire lock (name=${name}) ...`)
        const start = performance.now()
        ;[lockName, lock] = await acquire(redlock, name, concurrency, {
          retryCount,
          retryDelay: retryDelayMs,
          retryJitter: retryJitterMs
        })
        const end = performance.now()
        core.info(
          `Successfully acquired lock after ${round((end - start) / 1000, 3)} s.`
        )
        core.info(`Lock name=${lockName}, value=${lock.value}`)

        if (action === 'lock') {
          core.setOutput('name', lockName)
          core.setOutput('value', lock.value)
        } else {
          // Pass value to post step
          core.saveState('name', lockName)
          core.saveState('value', lock.value)
        }
      } catch (e) {
        console.trace(e)
        return core.setFailed('Failed to acquire lock')
      }

      // Spawn heartbeat process
      try {
        core.info(`Starting heartbeat process ...`)
        const mainPath = path.join(__dirname, 'index.js')
        const out = fs.openSync('/tmp/redlock-hb.log', 'a')
        const err = fs.openSync('/tmp/redlock-hb.log', 'a')
        const hb = child_process.spawn(
          process.argv[0],
          [
            mainPath,
            'heartbeat',
            hostsStr,
            durationSecondsStr,
            lockName,
            lock.value,
            `${lock.expiration}`
          ],
          { detached: true, stdio: ['ignore', out, err] }
        )
        hb.unref()
        core.info(`Started heartbeat process, pid=${hb.pid}`)

        if (action === 'lock') {
          core.setOutput('heartbeat-pid', hb.pid)
        } else {
          // Pass value to post step
          core.saveState('heartbeat-pid', hb.pid)
        }
      } catch (e) {
        console.trace(e)
        return core.setFailed('Failed to spawn heartbeat process')
      }
    }

    if ((action === 'unlock' && !isPost) || (action === 'auto' && isPost)) {
      // Stop heartbeat process
      let hbPidStr
      if (action === 'unlock') {
        hbPidStr = core.getInput('heartbeat-pid')
      } else {
        hbPidStr = core.getState('heartbeat-pid')
      }
      if (!Number.isInteger(+hbPidStr)) {
        return core.setFailed(
          `"heartbeat-pid" is not integer, check actions usage`
        )
      }
      const hbPid = Number(hbPidStr)

      core.info(`Stopping heartbeat process, pid=${hbPid} ...`)
      try {
        child_process.execSync(`kill ${hbPid}`)
        core.info(`Stopped heartbeat process.`)
      } catch (e) {
        console.error(
          `Failed to stop heartbeat process, perhaps it already exited?: ${e.message}`
        )
      }

      // Unlock
      let value = core.getInput('value')
      if (action === 'unlock' && value === '') {
        return core.setFailed(
          `"value" should be specified if action is "unlock"`
        )
      }
      if (action !== 'unlock' && value !== '') {
        return core.setFailed(
          `"value" should not be specified if action is not "unlock"`
        )
      }
      // Get name and value from main step if this is 'auto'
      if (action === 'auto' && isPost) {
        name = core.getState('name')
        if (name === '') {
          core.info(
            `name state not found, maybe lock acquisition was not successful?`
          )
          return
        }
        value = core.getState('value')
        if (value === '') {
          core.info(
            `value state not found, maybe lock acquisition was not successful?`
          )
          return
        }
      }

      core.info(`Releasing lock ...`)
      core.info(`Lock name=${name}, value=${value}`)

      try {
        await redlock.release(
          {
            redlock,
            resources: [name],
            value,
            attempts: [],
            expiration: 0
          },
          { retryCount: 0 }
        )
        core.info('Successfully released lock.')
      } catch (e) {
        console.trace(e)
        core.error('Failed to release lock, perhaps the lock expired?')
        if (action === 'unlock') {
          return core.setFailed(
            'Failed to release lock, perhaps the lock expired? Is lock name and value correct? Please check actions usage.'
          )
        }
        // If this was 'auto', do not report as failed in post step
      }
    }
  } finally {
    for (const client of clients) {
      client.disconnect()
    }
  }
}

/**
 * @param {string} name
 * @param {number} idx
 * @param {number} concurrency
 * @returns {string}
 */
const resourceName = (name, idx, concurrency) => {
  if (concurrency === 1) return name
  return `${name}-${idx}`
}

/**
 * @param {import('redlock').default} redlock
 * @param {string} name
 * @param {number} concurrency
 * @param {Partial<import('redlock').Settings>} settings
 * @return {Promise<[string, import('redlock').Lock]>}
 */
const acquire = async (redlock, name, concurrency, settings) => {
  let err
  for (let retry = 0; retry < settings.retryCount; retry++) {
    // Try to acquire any of the lock
    for (let idx = 0; idx < concurrency; idx++) {
      try {
        const rName = resourceName(name, idx, concurrency)
        return [
          rName,
          await redlock.acquire([rName], lockDuration, {
            retryCount: 0
          })
        ]
      } catch (e) {
        err = e
      }
    }

    // Sleep and try again
    if (retry === settings.retryCount - 1) break
    const jitterMs = Math.round((Math.random() * 2 - 1) * settings.retryJitter)
    await sleep(settings.retryDelay + jitterMs)
  }

  // Failed to acquire lock in specified retry count
  throw err
}
