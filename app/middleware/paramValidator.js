const Joi = require('joi');
const _ = require('lodash')
const { logger } = require('../core')

module.exports = (schema) => async function validate(req, res, next) {

    // Joi validation options
    const validationOptions = {
        abortEarly: false, // abort after the last validation error
        allowUnknown: true, // allow unknown keys that will be ignored
        stripUnknown: true // remove unknown keys from the validated data
    };

    return Joi
        .validate(req.params, schema, validationOptions)
        .then(data => {
            req.params = data
            next();
        })
        .catch(error => {

            const errorResponse = _.map(error.details, ({ message, type }) => ({
                message: message.replace(/['"]/g, ''),
                type
            }))
            logger.error(`paramValidator.validate()- failed 
                reason[${JSON.stringify(errorResponse)}]
                payload[${JSON.stringify(req.params)}]`)
            res.status(422).json(errorResponse)
        })
}
