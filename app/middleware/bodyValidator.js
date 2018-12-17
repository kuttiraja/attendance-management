const Joi = require('joi');
const _ = require('lodash')

module.exports = (schema) => async function bodyValidator(req, res, next) {

    // Joi validation options
    const validationOptions = {
        abortEarly: false, // abort after the last validation error
        allowUnknown: true, // allow unknown keys that will be ignored
        stripUnknown: true // remove unknown keys from the validated data
    };


    return Joi
        .validate(req.body, schema, validationOptions)
        .then(data => {
            req.body = data
            next();
        })
        .catch(error => {
            
            const errorResponse = _.map(error.details, ({ message, type }) => ({
                message: message.replace(/['"]/g, ''),
                type
            }))
            console.log(errorResponse)
            res.status(422).json(errorResponse)
        })
}
