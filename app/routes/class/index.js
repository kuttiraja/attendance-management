const { getAllGrade, getGradeById, addGrade } = require('./grade')
const router = require('express').Router()

router.get('/', getAllGrade)

router.get('/:studentId', getGradeById)

router.post('/',addGrade)

module.exports = router
