const { run } = require('./redlock')

;(async () => {
  try {
    await run()
    process.exit(0)
  } catch (e) {
    console.trace(e)
    process.exit(1)
  }
})()
