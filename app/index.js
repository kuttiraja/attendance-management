const { server }  = require('./server')
const { config, logger } = require('./core')
const db = require('./db')
const mongoose = db.mongoose

db.connect() 
  .then(() => {
    logger.info("app.connect() - DB connection: Success")
    server.listen(config.APP_PORT, () => logger.info(`app.listen() - App server started at [${config.APP_PORT}]`))
  })
  .catch((error) =>
  {
    logger.error("app.index.connect() - Error occured during Server listen/DB connection")
    logger.error(JSON.stringify(error))
  } )

process.on('SIGTERM', () => {
    mongoose.disconnect()
    logger.info("app.SIGTERM() - DB disconnected, process exiting...")
    process.exit()
})

process.on('SIGINT', () => {
    mongoose.disconnect()
    logger.info("app.SIGINT() - DB disconnected, process exiting...")
    process.exit()
})