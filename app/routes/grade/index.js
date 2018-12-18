const { getAllGrades, getGradeDetails, addGrade } = require('./grade')
const router = require('express').Router()
const { bodyValidator, paramValidator, queryValidator } = require('../../middleware')
const { addGradeSchema, 
        // modifyGradeSchema, 
        gradeIDSchema, 
        listGradeSchema } = require('./grade-schemas')

router.get('/', queryValidator(listGradeSchema), getAllGrades)
router.get('/:gradeId', paramValidator(gradeIDSchema),  getGradeDetails)
router.post('/', bodyValidator(addGradeSchema), addGrade)

module.exports = router
