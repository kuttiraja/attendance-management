const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    studentId: String,
    name: {firstName:String, middleName:String, lastName:String},
    dob: Date,
    email: String,
    gender: String,
    address: { 
        addressline1: String, 
        addressline2: String, 
        city: String, 
        zipCode: Number, 
        State: String 
    },
    parent: String,
    lastUpdateTS: Date,
    createTS: Date,
    deletedTS: Date
}, { collection: 'student' });

const studentModel = mongoose.model('student', studentSchema)
module.exports = studentModel;
