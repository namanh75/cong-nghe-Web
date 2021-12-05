const express = require('express')
const router = express.Router()
const infoController= require("../app/controllers/infoController")

//info user
router.get('/', infoController.info)

module.exports = router