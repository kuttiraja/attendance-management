const { getAllStaff, addStaff } = require('./staff')
const router = require('express').Router()

router.get('/', getAllStaff)

router.post('/',addStaff)

module.exports = router
