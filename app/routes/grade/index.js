const { getAllGrade, getGradeById, addGrade } = require('./grade')
const router = require('express').Router()
const { bodyValidator, paramValidator, queryValidator } = require('../../middleware')
const { addGradeSchema, 
        modifyGradeSchema, 
        gradeIDSchema, 
        listGradeSchema } = require('./grade-schemas')

router.get('/', queryValidator(listGradeSchema), getAllGrade)

router.get('/:gradeId', paramValidator(gradeIDSchema),  getGradeById)

router.post('/', bodyValidator(addGradeSchema), addGrade)

module.exports = router
