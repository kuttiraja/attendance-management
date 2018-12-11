const staff = require('./queries')
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
    try {
        result = await staff.addStaff(req.data)
        logger.info(`staff.addStaff()- returns [${result}] staff details`)
    } catch (err) {
        logger.error(`staff.addStaff()- error ${err}`)
    }
    res.send("Insert Success")
}

module.exports = { 
    getAllStaff,
    addStaff
}
