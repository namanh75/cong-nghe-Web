const user = require('../models/userModel')
const jwt = require('jsonwebtoken')

class siteController {

    // home
    index(req, res, next) {
        res.render('site/home')
    }

    //login post
    login(req, res, next) {
        user.findOne({ account: req.body.account, password: req.body.password })
            .then(data => {
                jwt.sign({ account: data.account }, "nhom21", function (err, token) {
                    if (err) console.log(err)
                    else {
                        res.cookie('token', token, {
                            maxAge: 3600 * 1000,
                            httpOnly: true
                        })
                        res.redirect('/')
                    }

                })
                    .catch(err => {
                        console.log(err)
                        res.send(err)
                    })
            })

    }

    //register post
    register(req, res, next) {
        console.log(req.body)
        const userdata = new user(req.body)
        userdata.save()
            .then(data => {
                console.log("lưu dữ liệu thành công")
            })
            .catch(err => {
                console.log(err)
            })
    }

    //admin-page
    adminpage(req, res, next) {
        res.render('site/adminpage')
    }

}

module.exports = new siteController