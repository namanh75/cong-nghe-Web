const express = require('express')
const router = express.Router()
const feedbackController= require("../app/controllers/feedbackController")

//service quality
router.get("/service", feedbackController.service)

//system quality
router.get("/system", feedbackController.system)

//index: select service or system or admin page
router.get("/", feedbackController.index)

module.exports = router