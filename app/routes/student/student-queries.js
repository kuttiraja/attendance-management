const student = require('../../db/models/student')
const { logger, config } = require('../../core')
const counter = require('../../db/models/counter')

async function getAllStudents() {
    return await student.find({})
}

async function addStudent(studentData) {

    let result = undefined;
    try {
        const nextStudentId = await counter.getNextSeqValue("studentId")
        studentData.studentId = nextStudentId
        
        result = await student.create(studentData)

        logger.debug(`student-queries.addStudent() - success - ${result.studentId}`)
    } catch (err) {
        logger.error(`student-queries.addStudent() - failure ${err}`)
    }

    return result
    
}

async function getStudentById(studentId) {
    let result = []
    try {
        result = await student.find({studentId})
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