function heartbeat(req, res, next) {
    res.send('Hello World! Heartbeat Service invoked')
}

module.exports = heartbeat