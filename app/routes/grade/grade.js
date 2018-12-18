const grade = require('./grade-queries')
const { logger, config } = require('../../core')

async function getAllGrade(req, res, next) {
    let result = [];
    try {
        result = await grade.getAllGrades()
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

async function getGradeById(req, res, next) {
    let result = [];
    try {
        result = await grade.getGradeById(req.params.gradeId)
        logger.info(`grade.getGradeById()- returns [${result.length}] grade details`)
    } catch (err) {
        logger.error(`grade.getGradeById()- error ${err}`)
    }

    res.send(result)
}


module.exports = { 
    getAllGrade,
    addGrade,
    getGradeById
}
