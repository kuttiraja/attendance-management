const heartbeatService = require('./heartbeat')
const router = require('express').Router()

router.get('/', heartbeatService)

module.exports = router