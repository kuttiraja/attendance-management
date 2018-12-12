const { getAllStudent, addStudent } = require('./student')
const router = require('express').Router()

router.get('/', getAllStudent)

router.post('/',addStudent)

module.exports = router
