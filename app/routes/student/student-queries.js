const {studentModel , counterModel} = require('../../db/models')
const { logger, config } = require('../../core')

async function getAllStudents() {
    return await studentModel.find({})
}

async function addStudent(studentData) {

    let result = undefined;
    try {
        const nextStudentId = await counterModel.getNextSeqValue("studentId")
        studentData.studentId = nextStudentId

        result = await studentModel.create(studentData)

        logger.debug(`student-queries.addStudent() - success - ${result.studentId}`)
    } catch (err) {
        logger.error(`student-queries.addStudent() - failure ${err}`)
    }

    return result

}

async function getStudentById(studentId) {
    let result = []
    try {
        result = await studentModel.find({ studentId })
        logger.info(`student-queries.getStudentById()- returns [${result.length}] student details`)
    } catch (err) {
        logger.error(`student-queries.getStudentById()- error ${err}`)
    }

    return result
}

module.exports = {
    getAllStudents,
    addStudent,
    getStudentById
}