const { getAllSubjects, getSubjectById, addSubject } = require('./subject')
const router = require('express').Router()
const { bodyValidator, paramValidator, queryValidator } = require('../../middleware')
const { addSubjectSchema, 
        // modifySubjectSchema, 
        subjectIDSchema, 
        listSubjectSchema } = require('./subject-schemas')

router.get('/', queryValidator(listSubjectSchema), getAllSubjects)
router.get('/:subjectId', paramValidator(subjectIDSchema),  getSubjectById)
router.post('/', bodyValidator(addSubjectSchema), addSubject)

module.exports = router
