const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    studentId: 'String',
    name: 'String',
    dob: 'String',
    email: { type: 'String', unique: true },
    gender: 'String',
    address: { type: 'object' },
    parent: 'String'
}, { collection: 'student' });

const studentModel = mongoose.model('student', studentSchema)
module.exports = studentModel;
