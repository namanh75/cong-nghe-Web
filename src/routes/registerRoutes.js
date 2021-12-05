const express = require('express')
const router = express.Router()
const registerController= require("../app/controllers/registerController")

//register
router.get('/', registerController.register)

module.exports = router