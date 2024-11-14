const Client = require('ioredis')

export const round = (n, places) =>
  Math.round(n * Math.pow(10, places)) / Math.pow(10, places)

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const defaultRedisPort = 6379

/**
 * @param {string[]} hosts
 * @returns {import('ioredis').Redis[]}
 */
export const getClients = hosts =>
  hosts.map(host => {
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
