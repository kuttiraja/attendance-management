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

    console.log(req.body)
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
            logger.error(`bodyValidator.validate()- failed 
                reason[${JSON.stringify(errorResponse)}] 
                payload[${JSON.stringify(req.body)}]`)
            res.status(422).json(errorResponse)
        })
}
