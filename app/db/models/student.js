const mongoose = require('mongoose')
const Types = mongoose.Schema.Types
const studentSchema = new mongoose.Schema({
    studentId: Types.Number,
    name: {
        firstName: Types.String,
        middleName: Types.String,
        lastName: Types.String
    },
    dob: Types.Date,
    email: Types.String,
    gender: Types.String,
    address: {
        addressline1: Types.String,
        addressline2: Types.String,
        city: Types.String,
        zipCode: Types.Number,
        State: Types.String
    },
    parent: Types.String,
    lastUpdateTS: Types.Date,
    createTS: Types.Date,
    deletedTS: Types.Date
}, { collection: 'student' });

const studentModel = mongoose.model('student', studentSchema)
module.exports = studentModel;
