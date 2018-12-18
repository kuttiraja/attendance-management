const {grade, counter} = require('../../db/models')
const { logger, config } = require('../../core')
// const counter = require('../../db/models/counter')

async function getAllGrades(page, index) {
    return await grade.find({}).limit(page)
}

async function getGradeDetails(id) {
    return await grade.find({ gradeId: id })
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


module.exports = {
    getAllGrades,
    addGrade,
    getGradeDetails
}