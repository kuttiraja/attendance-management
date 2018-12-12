const express = require('express')
const { logger, config } = require('./core')
const app = express()
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const {responseTime} = require('./middleware')

//Global Middleware
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(responseTime)


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
    server: app
}
