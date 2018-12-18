const {staffModel , counterModel} = require('../../db/models');
const { logger, config } = require('../../core');

async function getStaffDetails(id) {
    return await staffModel.find({ staffId: id })
}

async function modifyStaff(staffId, updateStaff) {
    // last parameter new true is for returning the updated document
    return staffModel.findOneAndUpdate(staffId, updateStaff, { new: true })
}

async function getAllStaffs(page_size, page_num) {
    let skips = page_size * (page_num - 1)
    return await staffModel
        .find({})
        .skip(skips)
        .limit(page)
}

async function addStaff(staffData) {
    let result = undefined;
    try {
        const nextStaffId = await counterModel.getNextSeqValue("staffId")
        staffData.staffId = nextStaffId;
        result = await staffModel.create(staffData)

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
