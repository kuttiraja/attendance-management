const server = require('./server').app
const logger = require('./server').logger
const db = require('./db')
const mongoose = db.mongoose

db.connect() 
  .then(() => {
    //   console.log("DB Connected")
    logger.info("DB Connection: Success")
    server.listen(3000, () => logger.info('App Server started at 3000'))
  })
  .catch((error) => logger.error("Error Occured during DB Connection"))

process.on('SIGTERM', () => {
    mongoose.disconnect()
    logger.info("SIGTERM:DB Disconnected, Process Exiting...")
    process.exit()
})

process.on('SIGINT', () => {
    mongoose.disconnect()
    logger.info("SIGINT:DB Disconnected, Process Exiting...")
    process.exit()
})