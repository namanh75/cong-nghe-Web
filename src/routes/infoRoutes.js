const express = require('express')
const router = express.Router()
const infoController= require("../app/controllers/infoController")

//info post
router.put('/:name', infoController.update)

//info user
router.get('/:name', infoController.info)

module.exports = router