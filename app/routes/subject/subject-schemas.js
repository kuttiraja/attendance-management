const Joi = require('joi')

const addSubjectSchema = Joi.object({
    subjectName: Joi.string().required(),
    maxMarks: Joi.number().min(10),
    subjectCode: Joi.string()
})

const modifySubjectSchema = Joi.object({
    subjectId: Joi.number().min(1).required(),
    subjectCode: Joi.string().required(),
    subjectName: Joi.string().required(),
    maxMarks: Joi.number()
})

const subjectIDSchema = Joi.object({
    subjectId: Joi.number().min(1).required()
})

const listSubjectSchema = Joi.object({
    page_size: Joi.number().min(1).required(),
    page_num: Joi.number().min(5)
})

module.exports = {
    addSubjectSchema,
    modifySubjectSchema,
    subjectIDSchema,
    listSubjectSchema
}