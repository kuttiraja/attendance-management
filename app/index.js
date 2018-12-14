const { server }  = require('./server')
const { config, logger } = require('./core')
const db = require('./db')
const mongoose = db.mongoose

db.connect() 
  .then(() => {
    logger.info("DB connection: Success")
    server.listen(config.APP_PORT, () => logger.info(`App server started at ${config.APP_PORT}`))
  })
  .catch((error) =>
  {
    logger.error("Error occured during APP PORT/DB connection")
    logger.error(JSON.stringify(error))
  } )

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