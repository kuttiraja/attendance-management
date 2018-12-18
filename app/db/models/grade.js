const mongoose = require('mongoose')
const Types = mongoose.Schema.Types
const gradeSchema = new mongoose.Schema({
    gradeId: Types.Number,
    gradeName: Types.String,
    
})

const gradeModel = mongoose.model('grade', gradeSchema)
module.exports = gradeModel