const student = require('./student-queries')
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


async function addStudent(req, res, next) {
    
let result = [];
    const { name, dob, email, gender, address, parent  } = req.body
    try {
        const newStudent = {
            name,
            dob,
            email,
            gender,
            address,
            parent
        }

        result = await student.addStudent(newStudent)
        logger.info(`student.addStudent()- returns [${result.studentId}] student details`)
    } catch (err) {
        logger.error(`student.addStudent()- error ${err}`)
    }
    if (result.studentId)
        res.status(201).send('Insert Success')
    else
        res.status(409).send('Error in processing request')
}

module.exports = { 
    getAllStudent,
    addStudent
}
