const express = require('express')
const config = require('./core/config')
const app = express()
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

//Global Middleware
const bodyParser = require("body-parser")
const logger = require('./core/logger').logger

//Dynamic Route Imports & Adding to Express Middleware
const getDirectories = source => fs.readdirSync(source)
const routeDir = getDirectories(path.resolve('./app/routes'))

routeDir.map(route => {
        const router = require(`./routes/${route}`)
        app.use(`/${config.APP_NAME}/${route}`, router)
})

logger.info(`Logging enabled ${config.LOG_TO_FILE_OR_CONSOLE}`)
app.use(morgan('combined', { stream: logger.stream }))

module.exports = { 
    server: app ,  
    logger: logger 
}
