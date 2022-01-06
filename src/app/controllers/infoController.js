const user = require('../models/userModel')
const jwt = require('jsonwebtoken')

class infoController {

    // info of user
    info(req, res, next) {
        if (req.cookies.token) {
            jwt.verify(req.cookies.token, 'nhom21', function (err, tokendata) {
                if (err){
                    console.error(err)
                    res.send('xác thực tài khoản thất bại')
                } 
                else {
                    user.findOne({ account: datatoken.account })
                        .then(userdata => {
                            userdata = userdata ? userdata.toOject() : userdata
                            res.render("information/userInformation", { 
                                userdata: userdata
                            })
                        })
                        .catch(err => {
                            console.error(err)
                            res.send('không tìm thấy dữ liệu người dùng. Hãy thử đăng nhập')
                        })
                }
            })
        }
        else{
            res.send('Vui lòng đăng nhập')
        }
    }

    //update information
    update(req, res, next) {
            jwt(req.cookies.token, 'nhom21', function(err, tokendata) {
                if(err) {
                    console.error(err)
                    res.send('xác thực tài khoản thất bại, vui lòng đăng nhập lại')
                }
                else {
                    user.findOne({account: tokendata.account})
                    .then( userdata => {
                        user.updateOne({ account: userdata.account}, req.body)
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