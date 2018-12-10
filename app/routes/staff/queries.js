const staff = require('../../db/models/staff');

async function getAllStaffs() {
    return await staff.find({})
}

async function addStaff(staffData) {
    
    return await staff.insertMany(staffData, (error, result) =>  {
        if(error) {
            console.log(error)
        }
        else {
            console.log(result);
        }
    })
}

module.exports = {
    getAllStaffs,
    addStaff
}
