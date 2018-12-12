const { getAllStudent, getStudentById, addStudent } = require('./student')
const router = require('express').Router()

router.get('/', getAllStudent)

router.get('/:studentId', getStudentById)

router.post('/',addStudent)

module.exports = router
