const mongoose = require('mongoose')
const Types = mongoose.Schema.Types
const subjectSchema = new mongoose.Schema({
    subjectId: Types.Number,
    subjectName: Types.String,
    maxMarks: Types.Number,
    subjectCode: Types.String
})

const subjectModel = mongoose.model('subject', subjectSchema)
module.exports = subjectModel