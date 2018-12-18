const {subject, counter} = require('../../db/models')
const { logger, config } = require('../../core')

async function getAllSubjects(page_size, page_num) {
    let skips = page_num * (page_size - 1)
    return await subject.find({})
                .skip(skips)
                .limit(page)
}

async function getSubjectDetails(id) {
    return await subject.find({ subjectId: id })
}

async function addSubject(subjectData) {

    let result = undefined;
    try {
        const nextSubjectId = await counter.getNextSeqValue("subjectId")
        subjectData.subjectId = nextSubjectId

        result = await subject.create(subjectData)

        logger.debug(`subject-queries.addSubject() - success - ${result.subjectId}`)
    } catch (err) {
        logger.error(`subject-queries.addSubject() - failure ${err}`)
    }

    return result

}

async function getSubjectById(subjectId) {
    let result = []
    try {
        result = await subject.find({ subjectId:subjectId })
        logger.info(`subject-queries.getSubjectById()- returns [${result.length}] subject details`)
    } catch (err) {
        logger.error(`subject-queries.getSubjectById()- error ${err}`)
    }

    return result
}

module.exports = {
    getAllSubjects,
    addSubject,
    getSubjectById
}