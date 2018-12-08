const mongoose = require('mongoose')
mongoose.Promise = require('q').Promise

const mongooseOptions = {
    reconnectTries : 120,
    reconnectInterval : 1000,
    useNewUrlParser : true
    // useMongoClient : true
}
DB_URI =  "mongodb://localhost/test"
async function connect() {
    await mongoose.connect(DB_URI, mongooseOptions)
}

module.exports = {
    connect, 
    mongoose
}