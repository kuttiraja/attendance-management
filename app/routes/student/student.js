const student = require('./queries')
const { logger, config } = require('../../core')

async function getAllStudent(req, res, next) {
    let result = [];
    try {
        result = await student.getAllStudents()
        logger.info(`student.getAllStudent()- returns [${result.length}] student details`)
    } catch (err) {
        logger.error(`student.getAllStudent()- error ${err}`)
    }

    res.send(result)
}

module.exports.getAllStudent = getAllStudent;
