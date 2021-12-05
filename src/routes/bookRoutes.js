const express = require('express')
const router = express.Router()
const bookController= require("../app/controllers/bookController")

//info user
router.get("/info", bookController.info)

//book schedule
router.get('/', bookController.book)

module.exports = router