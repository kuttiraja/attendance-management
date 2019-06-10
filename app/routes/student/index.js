const { getAllStudent, getStudentById, addStudent, updateStudentById } = require('./student')
const router = require('express').Router()
const { studentIDSchema, modifyStudentSchema } = require('./student-schema')
const { bodyValidator, paramValidator, queryValidator } = require('../../middleware')

router.get('/', getAllStudent)

router.get('/:studentId', paramValidator(studentIDSchema), getStudentById)

router.post('/', addStudent)

router.put('/:studentId', paramValidator(studentIDSchema), bodyValidator(modifyStudentSchema), updateStudentById)

module.exports = router
