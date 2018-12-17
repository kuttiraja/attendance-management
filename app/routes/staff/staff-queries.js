const staff = require('../../db/models/staff');
const counter = require('../../db/models/counter');
const { logger, config } = require('../../core');

async function getStaffDetails(id) {
    return await staff.find({ staffId: id })
}

async function modifyStaff(staffId, updateStaff) {
    // last parameter new true is for returning the updated document
    return staff.findOneAndUpdate(staffId, updateStaff, { new: true })
}

async function getAllStaffs(page, index) {
    return await staff
        .find({})
        .limit(page)
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
    getStaffDetails,
    modifyStaff,
    getAllStaffs,
    addStaff
}
