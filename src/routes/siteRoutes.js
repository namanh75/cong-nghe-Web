const express = require('express')
const router = express.Router()
const siteController= require("../app/controllers/siteController")

//views of admin page
router.get("/admin", siteController.adminpage)

//login
router.get("/login", siteController.login)

//login post
router.post("/login", siteController.loginpost)

//register post
router.post("/register", siteController.register)

//home
router.get('/', siteController.index)

module.exports = router