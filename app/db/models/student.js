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
    emailID: Types.String,
    gender: Types.String,
    address: {
        addressLine1: Types.String,
        addressLine2: Types.String,
        city: Types.String,
        zipCode: Types.Number,
        state: Types.String
    },
    parent: Types.String,
    lastUpdatedTS: Types.Date,
    createdTS: Types.Date,
    deletedTS: Types.Date
}, { collection: 'student' });

const studentModel = mongoose.model('student', studentSchema)
module.exports = studentModel;
