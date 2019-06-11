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
    const { name, dob, emailID, gender, address, parent } = req.body
    try {
        const newStudent = {
            name,
            dob,
            emailID,
            gender,
            address,
            parent,
            lastUpdatedTS: Date.now(),
            createdTS: Date.now()
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

async function getStudentById(req, res, next) {
    let result = [];
    try {
        result = await student.getStudentById(req.params.studentId)
        logger.info(`student.getStudentById()- returns [${result.length}] student details`)
    } catch (err) {
        logger.error(`student.getStudentById()- error ${err}`)
    }

    res.send(result)
}


async function updateStudentById(req, res, next) {
    let response = {
        data: []
    }

    const { studentId } = req.params
    logger.info(`student.updateStudentById() - start studentId[${studentId}]`)
    try {
        const studentsList = await student.getStudentById(studentId)
        logger.info(`student.updateStudentById() - student.getStudentById() responded [${JSON.stringify(studentsList)}]`)

        if (!studentsList) {
            response.error = `Error in processing operation`
        } else if (studentsList && studentsList.length == 0) {
            response.error = `No student found for ID [${studentId}]`
        } else if (studentsList && studentsList.length > 1) {
            response.data.push(studentsList)
            response.error = `More than 1 stundent found for ID [${studentId}]`
        } else {

            const { name, dob, emailID, gender, address, parent } = req.body
            const updStudent = {
                name,
                dob,
                emailID,
                gender,
                address,
                parent,
                lastUpdatedTS: Date.now()
            }

            logger.info(`student.updateStudentById() - updating student[${studentId}] with [${updStudent}]`)
            const updResult = await student.updateStudentById(studentId, updStudent)
            logger.info(`student.updateStudentById() - update sucessfull for student[${studentId}] with [${JSON.stringify(updStudent)}]`)
            response.data.push(updResult)
        }

    } catch (err) {
        response.error = `System failed to find the student with ID [${studentId}]`
        logger.error(`student.updateStudentById() - error studentId[${studentId}] ${err}`)
        logger.error(err)
    }

    logger.info(`student.updateStudentById() - end studentId[${studentId}] result:[${JSON.stringify(response)}]`)
    if (response.error && response.error.length > 1)
        res.status(409).send(response)
    else
        res.status(200).send(response)
}

async function removeStudentById(req, res, next) {
    let response = {
        data: []
    }

    const { studentId } = req.params
    logger.info(`student.removeStudentById() - start studentId[${studentId}]`)

    try {
        const studentsList = await student.getStudentById(studentId)
        logger.info(`student.removeStudentById() - student.getStudentById() responded [${JSON.stringify(studentsList)}]`)

        if (!studentsList) {
            response.error = `Error in processing operation`
        } else if (studentsList && studentsList.length == 0) {
            response.error = `No student found for ID [${studentId}]`
        } else if (studentsList && studentsList.length > 1) {
            response.data.push(studentsList)
            response.error = `More than 1 stundent found for ID [${studentId}]`
        } else {

            const { name, dob, emailID, gender, address, parent } = req.body
            const updStudent = {
                deletedTS: Date.now(),
                lastUpdatedTS: Date.now()
            }

            logger.info(`student.removeStudentById() - updating student[${studentId}] with [${JSON.stringify(updStudent)}]`)
            const updResult = await student.updateStudentById(studentId, updStudent)
            logger.info(`student.removeStudentById() - update sucessfull for student[${studentId}]`)
            response.data.push(updResult)
        }

    } catch (err) {
        response.error = `System failed to find the student with ID [${studentId}]`
        logger.error(`student.removeStudentById() - error studentId[${studentId}] ${err}`)
        logger.error(err)
    }

    logger.info(`student.removeStudentById() - end studentId[${studentId}] result:[${JSON.stringify(response)}]`)
    if (response.error && response.error.length > 1)
        res.status(409).send(response)
    else
        res.status(200).send(response)

}


module.exports = {
    getAllStudent,
    addStudent,
    getStudentById,
    updateStudentById,
    removeStudentById
}
