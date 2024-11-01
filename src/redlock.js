const core = require('@actions/core')
const { default: Redlock } = require('redlock')
const Client = require('ioredis')

const validActions = ['auto', 'lock', 'unlock']

const defaultRedisPort = 6379

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
  const hosts = hostsStr.split(',').map(e => e.trim())

  const name = core.getInput('name')
  if (name === '') {
    return core.setFailed('"name" of the lock must be specified')
  }

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

  const clients = hosts.map(host => {
    const parts = host.split(':')
    switch (parts.length) {
      case 1:
        return new Client({ host: parts[0], port: defaultRedisPort })
      case 2:
        return new Client({ host: parts[0], port: +parts[1] })
      default:
        throw new Error(`unexpected host format: ${host}`)
    }
  })
  const redlock = new Redlock(clients, {
    retryCount,
    retryDelay: retryDelayMs,
    retryJitter: retryJitterMs
  })

  try {
    if ((action === 'lock' && !isPost) || (action === 'auto' && !isPost)) {
      const durationSecondsStr = core.getInput('duration-seconds')
      if (
        !Number.isInteger(+durationSecondsStr) ||
        Number(durationSecondsStr) <= 0
      ) {
        return core.setFailed(`"duration-seconds" should be a positive integer`)
      }
      const durationSeconds = Number(durationSecondsStr)

      try {
        core.info(`Trying to acquire lock (name=${name}) ...`)
        const start = performance.now()
        const lock = await redlock.acquire([name], durationSeconds * 1000)
        const end = performance.now()
        core.info(
          `Successfully acquired lock after ${round((end - start) / 1000, 3)} s.`
        )
        core.info(`Lock name=${name}, value=${lock.value}`)

        if (action === 'lock') {
          core.setOutput('value', lock.value)
        } else {
          // Pass value to post step
          core.saveState('value', lock.value)
        }
      } catch (e) {
        console.trace(e)
        return core.setFailed('Failed to acquire lock')
      }
    }

    if ((action === 'unlock' && !isPost) || (action === 'auto' && isPost)) {
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
      // Get value from main step if this is 'auto'
      if (action === 'auto' && isPost) {
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
        core.error('Failed to release lock')
        if (action === 'unlock') {
          return core.setFailed('Failed to release lock')
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

const round = (n, places) =>
  Math.round(n * Math.pow(10, places)) / Math.pow(10, places)
