const Types = mongoose.Schema.Types

const mongoose = require('mongoose')
const student = require('./student')
const staff = require('./staff')
const grade = require('./grade')

const batchSchema = new mongoose.Schema({
    batchId: {
        type: Types.Number,
        min: 1,
        required: true
    },
    students: Types.Array.student,
    staff: staff,
    academicYear: Types.String,
    grade: grade,
    // class: class,
    // subjects: [subject],
    lastUpdateTS: { type: Types.Date, default: Date.now() },
    createTS: { type: Types.Date, default: Date.now() },
    deletedTS: Types.Date
}, { collection: 'batch' });

const staffModel = mongoose.model('staff', staffSchema)
module.exports = staffModel;
