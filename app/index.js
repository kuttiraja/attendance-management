const server = require('./server')
const db = require('./db')
const mongoose = db.mongoose

db.connect() 
  .then(() => {
      console.log("DB Connected")
    server.listen(3000, () => console.log('App Server started at 3000'))
  })
  .catch((error) => console.log("Error Occured during DB Connection"))

process.on('SIGTERM', () => {
    mongoose.disconnect()
    console.log("SIGTERM:DB Disconnected, Process Exiting...")
    process.exit()
})

process.on('SIGINT', () => {
    mongoose.disconnect()
    console.log("SIGINT:DB Disconnected, Process Exiting...")
    process.exit()
})