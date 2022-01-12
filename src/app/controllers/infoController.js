const user = require('../models/userModel')
const jwt = require('jsonwebtoken')
const schedule = require('../models/scheduleModel')

class infoController {

    // info of user
    info(req, res, next) {
        if (req.cookies.token) {
            jwt.verify(req.cookies.token, 'nhom21', function (err, datatoken) {
                if (err) {
                    console.error(err)
                    res.render('site/page404', {
                        layout: false,
                        massage: "Xác thực tài khoản thất bại"
                    })
                }
                else {
                    user.findOne({ account: datatoken.account })
                        .then(userdata => {
                            userdata = userdata ? userdata.toObject() : userdata
                            schedule.find({ accountuser: userdata.account })
                                .then(schedules => {
                                    schedules =schedules.map(schedule => schedule.toObject())
                                    res.render("information/userInformation", {
                                        userdata: userdata,
                                        schedules: schedules
                                    })
                                })
                                .catch(err => {
                                    console.log(err)
                                })

                        })
                        .catch(err => {
                            console.error(err)
                            res.render('site/page404', {
                                layout: false,
                                massage: "Không tìm thấy dữ liệu người dùng. Hãy thử đăng nhập lại hoặc đăng ký"
                            })
                        })
                }
            })
        }
        else {
            res.redirect('/')
        }
    }

    //update information
    update(req, res, next) {
        jwt(req.cookies.token, 'nhom21', function (err, tokendata) {
            if (err) {
                console.error(err)
                res.send('xác thực tài khoản thất bại, vui lòng đăng nhập lại')
            }
            else {
                user.findOne({ account: tokendata.account })
                    .then(userdata => {
                        user.updateOne({ account: userdata.account }, req.body)
                            .then(() => {
                                console.log('Update thành côn')
                            })
                            .catch(err => console.error(err))
                    })
                    .catch(err => console.error(err))
            }
        })
    }

}

module.exports = new infoController