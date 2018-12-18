const {grade, counter} = require('../../db/models')
const { logger, config } = require('../../core')

async function getAllGrades(page_size, page_num) {
    let skips = page_size * (page_num - 1)
    return await grade.find({}).skip(skips).limit(page_size)
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