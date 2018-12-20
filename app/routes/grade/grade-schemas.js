const Joi = require('joi')

const addGradeSchema = Joi.object({
    gradeName: Joi.string().required(),
    maxStrength: Joi.number().min(10)
})

const modifyGradeSchema = Joi.object({
    gradeId: Joi.number().min(1).required(),
    gradeName: Joi.string().required(),
    maxStrength: Joi.number().min(10)
})

const gradeIDSchema = Joi.object({
    gradeId: Joi.number().min(1).required()
})

const listGradeSchema = Joi.object({
    page_size: Joi.number().min(1).required(),
    page_num: Joi.number().min(5)
})

module.exports = {
    addGradeSchema,
    modifyGradeSchema,
    gradeIDSchema,
    listGradeSchema
}