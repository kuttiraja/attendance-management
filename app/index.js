const { server, logger } = require('./server')
const config = require('./core/config')
const db = require('./db')
const mongoose = db.mongoose

db.connect() 
  .then(() => {
    logger.info("DB connection: Success")
    server.listen(config.APP_PORT, () => logger.info(`App server started at {config.APP_PORT}`))
  })
  .catch((error) => logger.error("Error occured during DB connection"))

process.on('SIGTERM', () => {
    mongoose.disconnect()
    logger.info("SIGTERM:DB disconnected, process exiting...")
    process.exit()
})

process.on('SIGINT', () => {
    mongoose.disconnect()
    logger.info("SIGINT:DB disconnected, process exiting...")
    process.exit()
})