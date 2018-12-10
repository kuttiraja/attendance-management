const express = require('express')
const config = require('./core/config')
const app = express()
const morgan = require('morgan')


//Global Middleware
const bodyParser = require("body-parser")
const logger = require('./core/logger').logger

//Application Routes imports
const healthRouter = require('./routes/health')

logger.info(`Logging enabled ${config.LOG_TO_FIE_OR_CONSOLE}`)
app.use(morgan('combined', {stream: logger.stream}))

//Application Routes
app.use(healthRouter)

module.exports = { 
    server: app ,  
    logger: logger 
}
