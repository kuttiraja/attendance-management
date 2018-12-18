const staff = require('./staff-queries')
const { logger, config } = require('../../core')

async function getStaffDetails(req, res, next) {
    const { staffId } = req.params
    logger.info(`staff.getStaffDetails()- start input[${staffId}]`)
    let result = {}

    try {
        result = await staff.getStaffDetails(staffId)
        logger.info(`staff.getStaffDetails()- returns [${result.staffId}] staff details`)
    } catch (err) {
        logger.error(`staff.getStaffDetails()- error [${err}]`)
    }

    res.status(200).json(result)
}

async function modifyStaff(req, res, next) {
    const { staffId } = req.params;
    logger.info(`staff.modifyStaffDetails()- start input[${staffId}]`)

    let result = {
        status: "",
        message: "",
        content: null
    }

    const { name, dob, email, gender, address } = req.body;
    const updateStaffId = req.body.staffId
    const updateStaff = { name, dob, email, gender, address }

    try {
        const staffDetailsDB = await staff.getStaffDetails(staffId)
        let isStaffBodySame = null
        if (staffDetailsDB) {
            isStaffBodySame = (staffDetailsDB[0].staffId === updateStaffId) ? true : false
            logger.info(`staff.modifyStaff()- found staff with id[${staffId}] isStaffBodySame[${isStaffBodySame}]`)
        }
        else {
            logger.info(`staff.modifyStaff()- cannot find staff with id[${staffId}]`)
            result = {
                status: "ERROR",
                message: `No staff for id[${staffId}] available`,
                content: undefined
            }
        }

        if (isStaffBodySame) {
            const updatedResult = await staff.modifyStaff({ staffId }, updateStaff)
            result = {
                status: "SUCCESS",
                message: "",
                content: updatedResult
            }
        } else {
            logger.info(`staff.modifyStaff()- request staffId [${staffId}] is different from body staffId[${updateStaffId}]`)
            result = {
                status: "ERROR",
                message: `Cannot update staff[${staffId}] and with[${updateStaffId}]`,
                content: undefined
            }
        }

    } catch (err) {
        logger.error(`staff.modifyStaff()- error [${JSON.stringify(err)}]`)
    }

    res.status(200).json(result)

}

async function getAllStaff(req, res, next) {
    let result = [];
    const { page_size, page_num = 0 } = req.query
    try {
        result = await staff.getAllStaffs(page_size, page_num)
        logger.info(`staff.getAllStaff()- returns [${result.length}] staff details`)
    } catch (err) {
        logger.error(`staff.getAllStaff()- error [${err}]`)
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
        logger.error(`staff.addStaff()- error [${err}]`)
    }
    if (result.staffId)
        res.status(201).send(result)
    else
        res.status(409).send('Error in processing request')
}

module.exports = {
    getAllStaff,
    modifyStaff,
    addStaff,
    getStaffDetails
}
