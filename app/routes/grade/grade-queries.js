const {grade, counter} = require('../../db/models')
const { logger, config } = require('../../core')
// const counter = require('../../db/models/counter')

async function getAllGrades() {
    return await grade.find({})
}

async function addGrade(gradeData) {

    let result = undefined;
    try {
        const nextGradeId = await counter.getNextSeqValue("gradeId")
        gradeData.gradeId = nextGradeId

        result = await grade.create(gradeData)

        logger.debug(`grade-queries.addGrade() - success - ${result.gradeId}`)
    } catch (err) {
        logger.error(`grade-queries.addGrade() - failure ${err}`)
    }

    return result

}

async function getGradeById(gradeId) {
    let result = []
    try {
        result = await grade.find({ gradeId:gradeId })
        logger.info(`grade-queries.getGradeById()- returns [${result.length}] grade details`)
    } catch (err) {
        logger.error(`grade-queries.getGradeById()- error ${err}`)
    }

    return result
}

module.exports = {
    getAllGrades,
    addGrade,
    getGradeById
}