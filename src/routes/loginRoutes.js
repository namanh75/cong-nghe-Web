const express = require('express')
const router = express.Router()
const loginController= require("../app/controllers/loginController")

//login
router.get('/', loginController.login)

module.exports = router