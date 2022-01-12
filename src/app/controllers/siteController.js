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
                                maxAge: 3600 * 1000 * 24,
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
                        massage: "Không tìm thấy tài khoản trên hệ thống, hãy đăng nhập lại hoặc tạo tài khoản mới!!!"
                    })
                })
        }
    }

    //register post
    register(req, res, next) {
        console.log(req.body)
        var formData = req.body
        formData.role = 1
        console.log(formData)
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
                            if (userdata.role == 3) {
                                user.find({}).then(users => {
                                    users = users.map(user => user.toObject())
                                    res.render('site/adminpage', {
                                        users
                                    })
                                }).catch(err => {
                                    console.log(err)
                                    res.render('site/page404', {
                                        layout: false,
                                        massage: "Có lỗi xảy ra với sever"
                                    })
                                })

                            }
                            else res.render('site/page404', {
                                layout: false,
                                massage: "Bạn không thể truy cập vào trang này"
                            })
                        })
                        .catch(err => {
                            console.log(err)
                            res.render('site/page404', {
                                layout: false,
                                massage: "Không tìm thấy tài khoản trên hệ thống, hãy thử đăng nhập lại hoặc tạo tài khoảng mới"
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

    //logout
    logout(req, res, next){
        res.clearCookie('token').redirect('/')
    }

}

module.exports = new siteController