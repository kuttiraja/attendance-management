const student = require('../../db/models/student');

async function getAllStudents() {
    return await student.find({})
}

module.exports.getAllStudents = getAllStudents;