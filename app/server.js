const express = require('express')
const config = require('./core/config')
const app = express()
const morgan = require('morgan')


//Global Middleware
const bodyParser = require("body-parser")
const logger = require('./core/logger').logger

//Application Routes imports
const healthRouter = require('./routes/health')
const student = require('./routes/student')

logger.info(`Logging enabled ${config.LOG_TO_FILE_OR_CONSOLE}`)
app.use(morgan('combined', { stream: logger.stream }))

//Application Routes
app.use('/heartbeat', healthRouter)
app.use('/student', student)

module.exports = {
    server: app,
    logger: logger
}
