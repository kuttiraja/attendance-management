const Joi = require('joi')

const addStudentSchema = Joi.object({
    name: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().allow('', null),
        middleName: Joi.string().allow('', null)
    }),
    dob: Joi.date().allow('', null),
    emailID: Joi.string().email().allow('', null),
    gender: Joi.string().length(1).required(),
    address: Joi.object({
        addressLine1: Joi.string().required(),
        addressLine2: Joi.string().allow('').optional(),
        city: Joi.string().required(),
        zipCode: Joi.number().min(100).max(999999).required(),
        state: Joi.string().required()
    })
})

const studentIDSchema = Joi.object({
    studentId: Joi.number().min(1).required()
})

const modifyStudentSchema = Joi.object({
    studentId: Joi.number().min(1).required(),
    name: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().allow(''),
        middleName: Joi.string().allow('')
    }).required(),
    dob: Joi.date().allow('',null),
    emailID: Joi.string().email().allow(''),
    gender: Joi.string().length(1).required(),
    address: Joi.object({
        addressLine1: Joi.string().required(),
        addressLine2: Joi.string().allow(''),
        city: Joi.string().required(),
        zipCode: Joi.number().min(100).max(999999).required(),
        state: Joi.string().required()
    })
})

const listStudentSchema = Joi.object({
    page_size: Joi.number().min(1),
    page_num: Joi.number().min(0)
})


module.exports = {
    addStudentSchema,
    studentIDSchema,
    modifyStudentSchema,
    listStudentSchema
}