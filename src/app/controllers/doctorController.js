const user = require('../models/userModel')
const jwt = require('jsonwebtoken')

class doctorController {

    //list of doctor
    info(req, res, next) {
        user.find({ role: 2 })
            .then(doctors => {
                doctors = doctors.map(user => user.toObject())
                res.render('doctor/doctor', {
                    doctors: doctors
                })
            })
    }

    //form schedule
    schedule(req, res, next) {
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
                    // var small=new user(data)
                    user.findOne({ account: data.account })
                        .then(userdata => {
                            userdata= userdata ? userdata.toObject() : userdata 
                            user.findOne({ name: req.query.d })
                                .then(doctor => {
                                    doctor = doctor ? doctor.toObject() : doctor
                                    res.render('doctor/schedule', {
                                        doctor: doctor,
                                        userdata: userdata
                                    })
                                })
                                .catch(err => {
                                    console.error(err)
                                    res.render('site/page404', {
                                        layout: false,
                                        massage: "Có lỗi xảy ra ở sever"
                                    })
                                })
                        })
                        .catch(err => {
                            console.log(err)
                            res.render('site/page404', {
                                layout: false,
                                massage: "Không tìm thấy tài khoản trên hệ thống, hãy đăng ký!!!"
                            })
                        })
                    console.log(req.body)
                }
            })
        }
        else {
            res.render('site/page404', {
                layout: false,
                massage: "Bạn chưa đăng nhập. Hãy vui lòng đăng nhập"
            })
        }


    }

    //post book schedule
    book(req, res, next) {
        if (req.cookies.token) {
            jwt.verify(req.cookies.token, "nhom21", function (err, data) {
                if (err) {
                    console.log(err)
                    res.render('site/page404')
                }
                else {
                    // var small=new user(data)
                    user.findOne({ account: data.account })
                        .then(userdata => {
                            user.findOne({ account: req.query.d })
                                .then(doctordata => {

                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        })
                        .catch(err => {
                            console.log(err)
                            res.send('vui lòng đăng ký')
                        })
                    console.log(req.body)
                }
            })
        }
        else {
            res.send('vui lòng đăng nhập')
        }
    }
}

module.exports = new doctorController