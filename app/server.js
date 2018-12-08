const express = require('express')
const app = express()

//Global Middleware
const bodyParser = require("body-parser")

//Application Middleware
const healthRouter = require('./routes/health')

app.use(healthRouter)

module.exports = app
