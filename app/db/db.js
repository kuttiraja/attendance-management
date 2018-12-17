const mongoose = require('mongoose')
const { logger, config } = require('../core')
mongoose.Promise = require('q').Promise
mongoose.set('debug', true)
const mongooseOptions = {
    reconnectTries: 120,
    reconnectInterval: 1000,
    useNewUrlParser: true
    // useMongoClient : true
}
let DB_URI = null;

if (config.DB_HOST === 'localhost')
    DB_URI = `mongodb://${config.DB_HOST}:${config.DB_PORT}/${config.DB_SCHEMA}`
else
    DB_URI = `mongodb://${config.DB_USER}:${config.DB_PASS}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_SCHEMA}`

async function connect() {
    await mongoose.connect(DB_URI, mongooseOptions)
}

module.exports = connect;
