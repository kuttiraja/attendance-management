const staff = require('../../db/models/staff');
const counter = require('../../db/models/counter');
const { logger } = require('../../core/logger');

async function getAllStaffs() {
    return await staff.find({})
}

async function addStaff(staffData) {
    let result = undefined;
    try {
        const nextStaffId = await counter.getNextSeqValue("staffId")
        staffData.staffId = nextStaffId;
        result = await staff.create(staffData)

        logger.debug(`staff-queries.addStaff() - success - ${result.staffId}`)
    } catch (err) {
        logger.error(`staff-queries.addStaff() - failure ${err}`)
    }

    return result
}

module.exports = {
    getAllStaffs,
    addStaff
}
