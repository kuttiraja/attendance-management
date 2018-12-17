const Joi = require('joi')
const addStaffSchema = Joi.object({
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

const modifyStaffSchema = Joi.object({
    staffId: Joi.number().min(1).required(),
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

const staffIDSchema = Joi.object({
    staffId: Joi.number().min(1).required()
})

const listStaffSchema = Joi.object({
    page: Joi.number().min(1).required(),
    limit: Joi.number().min(5)
})

module.exports = {
    addStaffSchema,
    modifyStaffSchema,
    staffIDSchema,
    listStaffSchema
}