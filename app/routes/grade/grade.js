const grade = require('./grade-queries')
const { logger, config } = require('../../core')

async function getGradeDetails(req, res, next) {
    const { gradeId } = req.params
    logger.info(`grade.getGradeDetails()- start input[${gradeId}]`)
    let result = {}

    try {
        result = await grade.getGradeDetails(gradeId)
        logger.info(`grade.getGradeDetails()- returns [${result.gradeId}] grade details`)
    } catch (err) {
        logger.error(`grade.getGradeDetails()- error [${err}]`)
    }
    res.status(200).json(result)
}

async function getAllGrades(req, res, next) {
    let result = [];
    const { page, index = 0 } = req.query
    try {
        result = await grade.getAllGrades(page, index)
        logger.info(`grade.getAllGrade()- returns [${result.length}] grade details`)
    } catch (err) {
        logger.error(`grade.getAllGrade()- error ${err}`)
    }

    res.send(result)
}

async function addGrade(req, res, next) {  
    let result = [];
    const { gradeName, maxStrength, gradeSection  } = req.body
    try {
        const newGrade = {
            gradeName,
            gradeSection,
            maxStrength
        }

        result = await grade.addGrade(newGrade)
        logger.info(`grade.addGrade()- returns [${result.gradeId}] grade details`)
    } catch (err) {
        logger.error(`grade.addGrade()- error ${err}`)
    }
    if (result.gradeId)
        res.status(201).send('Insert Success')
    else
        res.status(409).send('Error in processing request')
}


module.exports = { 
    getAllGrades,
    addGrade,
    getGradeDetails
}
