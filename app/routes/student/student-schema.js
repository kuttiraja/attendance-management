const Joi = require('joi')


const studentIDSchema = Joi.object({
    studentId: Joi.number().min(1).required()
})

const modifyStudentSchema = Joi.object({
    studentId: Joi.number().min(1).required(),
    name: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string(),
        middleName: Joi.string()
    }).required(),
    dob: Joi.date(),
    email: Joi.string().email(),
    gender: Joi.string().length(1).required(),
    address: Joi.object({
        addressLine1: Joi.string().required(),
        addressLine2: Joi.string(),
        city: Joi.string().required(),
        zipCode: Joi.number().min(100).max(999999).required(),
        state: Joi.string().required()
    })
})


module.exports = {
    studentIDSchema,
    modifyStudentSchema
}