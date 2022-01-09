const user = require('../models/userModel')
const jwt = require('jsonwebtoken')

class siteController {

    // home
    index(req, res, next) {
        res.render('site/home')
    }

    //login post
    login(req, res, next) {
        if (req.cookies.token) {
            jwt.verify(req.cookies.token, "nhom21", function (err, data) {
                if (err) {
                    console.log(err)
                    res.render('site/page404', {
                        layout: false,
                        massage: "Xác thực tài khoản thất bại"
                    })
                }
                else {
                    user.findOne({ account: data.account })
                        .then(userdata => {
                            user.findOne({ account: req.body.account, password: req.body.password })
                                .then(data => {
                                    jwt.sign({ account: data.account }, "nhom21", function (err, token) {
                                        if (err) {
                                            console.log(err)
                                            res.render('site/page404', {
                                                layout: false,
                                                massage: "Có lỗi với tài khoản này"
                                            })
                                        }
                                        else {
                                            res.clearCookie('token')
                                            res.cookie('token', token, {
                                                maxAge: 3600 * 1000,
                                                httpOnly: true
                                            })
                                            res.redirect('/')
                                        }

                                    })
                                })
                        })
                        .catch(err => {
                            console.log(err)
                            res.render('site/page404', {
                                layout: false,
                                massage: "Không tìm thấy tài khoản trên hệ thống, vui lòng đăng ký!!!"
                            })
                        })
                }
            })
        }
        else {
            user.findOne({ account: req.body.account, password: req.body.password })
                .then(data => {
                    jwt.sign({ account: data.account }, "nhom21", function (err, token) {
                        if (err) {
                            console.log(err)
                            res.render('site/page404', {
                                layout: false,
                                massage: "Có lỗi với tài khoản này"
                            })
                        }
                        else {
                            res.cookie('token', token, {
                                maxAge: 3600 * 1000,
                                httpOnly: true
                            })
                            res.redirect('/')
                        }
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.render('site/page404', {
                        layout: false,
                        massage: "Không tìm thấy tài khoản trên hệ thống, vui lòng đăng ký!!!"
                    })
                })
        }
    }

    //register post
    register(req, res, next) {
        console.log(req.body)
        formData = req.body
        formData.role = 1
        const userdata = new user(formData)
        userdata.save()
            .then(data => {
                console.log("lưu dữ liệu thành công")
                res.redirect('/')
            })
            .catch(err => {
                console.log(err)
                res.render('site/page404', {
                    layout: false,
                    massage: "Tài khoản này đã được ký, vui lòng đăng ký tài khoản khác"
                })
            })
    }

    //admin-page
    adminpage(req, res, next) {
        if (req.cookies.token) {
            jwt.verify(req.cookies.token, "nhom21", function (err, data) {
                if (err) {
                    console.log(err)
                    res.render('site/page404', {
                        layout: false,
                        massage: "Xác thực tài khoản thất bại"
                    })
                }
                else {
                    user.findOne({ account: data.account })
                        .then(userdata => {
                            if (userdata.role == 3) res.render('site/adminpage')
                            else res.render('site/page404', {
                                layout: false,
                                massage: "Bạn không thể truy cập vào trang này"
                            })
                        })
                        .catch(err => {
                            console.log(err)
                            res.render('site/page404', {
                                layout: false,
                                massage: "Không tìm thấy tài khoản trên hệ thống, vui lòng đăng ký"
                            })
                        })
                }
            })
        }
        else {
            res.render('site/page404', {
                layout: false,
                massage: "Bạn không thể truy cập vào trang này"
            })
        }
    }

}

module.exports = new siteController