const { sleep } = require('./utils')

const heartbeatPeriodMs = 1000
export const lockDuration = 10 * 1000

/**
 * @param {import('redlock').default} redlock
 * @param {import('redlock').Lock} lock
 * @param {number} maxMs
 */
export const heartbeat = async (redlock, lock, maxMs) => {
  const maxRunTime = Math.max(0, maxMs - lockDuration)
  const maxBeats = Math.ceil(maxRunTime / heartbeatPeriodMs)

  const start = performance.now()
  const end = start + maxMs
  for (let i = 0; i < maxBeats; i++) {
    if (end <= performance.now()) {
      console.warn(`Exiting heartbeat loop early because time run out`)
      return
    }
    await sleepUntil(start + (i + 1) * heartbeatPeriodMs)

    try {
      lock = await redlock.extend(lock, lockDuration, { retryCount: 0 })
    } catch (e) {
      console.warn(`unable to extend lock: ${e.message}`)
    }
  }

  console.warn(`Exiting heartbeat as exceeding max loop count (${maxBeats}).`)
}

const sleepUntil = async until => {
  const now = performance.now()
  if (now <= until) return
  return sleep(now - until)
}
