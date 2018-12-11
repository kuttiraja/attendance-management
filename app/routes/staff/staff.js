const staff = require('./staff-queries')
const { logger } = require('../../core/logger')

async function getAllStaff(req, res, next) {
    let result = [];
    try {
        result = await staff.getAllStaffs()
        logger.info(`staff.getAllStaff()- returns [${result.length}] staff details`)
    } catch (err) {
        logger.error(`staff.getAllStaff()- error ${err}`)
    }

    res.send(result)
}

async function addStaff(req, res, next) {
    let result = [];
    const { name, dob, email, gender, address } = req.body

    try {

        const newStaff = {
            name,
            dob,
            email,
            gender,
            address
        }

        result = await staff.addStaff(newStaff)
        logger.info(`staff.addStaff()- returns [${result.staffId}] staff details`)
    } catch (err) {
        logger.error(`staff.addStaff()- error ${err}`)
    }
    if (result.staffId)
        res.status(201).send('Insert Success')
    else
        res.status(409).send('Error in processing request')
}

module.exports = {
    getAllStaff,
    addStaff
}
