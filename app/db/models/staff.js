const mongoose = require('mongoose')
const staffSchema = new mongoose.Schema({
    staffId: String,
    name: {
        firstName: String, 
        middleName: String, 
        lastName: String
    },
    dob: Date,
    email: { type: String },
    gender: String,
    address: { 
        addressline1: String, 
        addressline2: String, 
        city: String, 
        zipCode: Number, 
        State: String 
    },
    lastUpdateTS: Date,
    createTS: Date,
    deletedTS: Date
}, { collection: 'staff' });

const staffModel = mongoose.model('staff', staffSchema)
module.exports = staffModel;
