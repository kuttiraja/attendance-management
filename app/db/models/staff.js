const mongoose = require('mongoose')
const Types = mongoose.Schema.Types
const staffSchema = new mongoose.Schema({
    staffId: {
        type: Types.Number,
        min: 1,
        required: true
    },
    name: {
        firstName: {
            type: Types.String,
            required: true
        },
        middleName: String,
        lastName: String
    },
    dob: {
        type: Types.Date,
        required: true
    },
    email: { type: Types.String },
    gender: Types.String,
    address: {
        addressLine1: Types.String,
        addressLine2: Types.String,
        city: Types.String,
        zipCode: Types.Number,
        State: Types.String
    },
    lastUpdateTS: { type: Types.Date, default: Date.now() },
    createTS: { type: Types.Date, default: Date.now() },
    deletedTS: Types.Date
}, { collection: 'staff' });

const staffModel = mongoose.model('staff', staffSchema)
module.exports = staffModel;
