const express = require('express')
const router = express.Router()
const doctorController= require('../app/controllers/doctorController')

//schedule
router.get('/schedule?d=:name', doctorController.schedule)

//post schedule
router.post('/schedule', doctorController.book)

//list of doctor 
router.get('/', doctorController.info)

module.exports = router