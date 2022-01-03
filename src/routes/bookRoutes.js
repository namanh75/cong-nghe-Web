const express = require('express')
const router = express.Router()
const bookController= require("../app/controllers/bookController")


//book schedule
router.get('/', bookController.book)

//book schedule
router.post('/', bookController.bookpost)

module.exports = router