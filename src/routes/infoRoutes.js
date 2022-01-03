const express = require('express')
const router = express.Router()
const infoController= require("../app/controllers/infoController")
const evaluation=require("../app/controllers/evaluationController")

//info post
router.post('/name', infoController.updateinfo)

//evalution post
router.post('/evaluation', evaluation.evaluate)

//info user
router.get('/', infoController.info)

module.exports = router