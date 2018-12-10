const { getAllStudent } = require('./student')
const router = require('express').Router()

router.get('/', getAllStudent)

module.exports = router
