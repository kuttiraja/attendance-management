const { getStaffDetails, modifyStaff, getAllStaff, addStaff } = require('./staff')
const router = require('express').Router()
const { bodyValidator, paramValidator, queryValidator } = require('../../middleware')
const { addStaffSchema, modifyStaffSchema, staffIDSchema, listStaffSchema } = require('./staff-schemas')

router.get('/:staffId', paramValidator(staffIDSchema), getStaffDetails)
router.put('/:staffId', paramValidator(staffIDSchema), bodyValidator(modifyStaffSchema), modifyStaff)
router.get('/', queryValidator(listStaffSchema), getAllStaff)
router.post('/', bodyValidator(addStaffSchema), addStaff)

module.exports = router
