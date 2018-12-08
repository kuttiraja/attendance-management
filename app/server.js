const express = require('express')
const app = express()
const morgan = require('morgan')

//Global Middleware
const bodyParser = require("body-parser")
const logger = require('./core/logger').logger

//Application Routes imports
const healthRouter = require('./routes/health')

logger.info('Logging enabled')
app.use(morgan('combined', {stream: logger.stream}))

//Application Routes
app.use(healthRouter)

module.exports = { 
    app: app ,  
    logger: logger 
}
