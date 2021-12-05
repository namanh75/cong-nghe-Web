const express = require('express')
const router = express.Router()
const siteController= require("../app/controllers/siteController")

//views of admin page
router.get("/admin-page", siteController.adminpage)

//home
router.get('/', siteController.index)

module.exports = router