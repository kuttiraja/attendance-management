const { getAllStaff, addStaff } = require('./staff')
const router = require('express').Router()
const { bodyValidator } = require('../../middleware')

const Joi = require('joi')
const StaffSchema = Joi.object({
    name: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string(),
        middleName: Joi.string()
    }),
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

router.get('/', getAllStaff)

router.post('/', bodyValidator(StaffSchema), addStaff)

module.exports = router
