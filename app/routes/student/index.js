const { getAllStudent, getStudentById, addStudent, updateStudentById, removeStudentById } = require('./student')
const router = require('express').Router()
const { addStudentSchema, studentIDSchema, modifyStudentSchema, listStudentSchema } = require('./student-schema')
const { bodyValidator, paramValidator, queryValidator } = require('../../middleware')

router.get('/', queryValidator(listStudentSchema), getAllStudent)

router.get('/:studentId', paramValidator(studentIDSchema), getStudentById)

router.post('/', bodyValidator(addStudentSchema), addStudent)

router.put('/:studentId', paramValidator(studentIDSchema), bodyValidator(modifyStudentSchema), updateStudentById)

router.delete('/:studentId', paramValidator(studentIDSchema), bodyValidator(modifyStudentSchema), removeStudentById)

module.exports = router
