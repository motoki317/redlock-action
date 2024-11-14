const { run } = require('./redlock')
const { heartbeat } = require('./heartbeat')
const { getClients } = require('./utils')
const { default: Redlock, Lock } = require('redlock')

if (process.argv.length >= 3 && process.argv[2] === 'heartbeat') {
  const hostsStr = process.argv[3]
  const durationSecondsStr = process.argv[4]
  const lockName = process.argv[5]
  const lockValue = process.argv[6]
  const lockExpiration = process.argv[7]

  const hosts = hostsStr.split(',').map(e => e.trim())
  const clients = getClients(hosts)
  const redlock = new Redlock(clients)
  const lock = new Lock(
    redlock,
    [lockName],
    lockValue,
    [],
    Number(lockExpiration)
  )
  console.log(JSON.stringify(lock))

  // eslint-disable-next-line github/no-then
  heartbeat(redlock, lock, Number(durationSecondsStr) * 1000).then(() => {
    for (const client of clients) {
      client.disconnect()
    }
  })
} else {
  run()
}
