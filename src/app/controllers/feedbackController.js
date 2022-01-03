const feedback = require('../models/feedbackModel')
const user = require('../models/userModel')
const jwt = require('jsonwebtoken')

class feedbackController{
    
    //system quality
    system(req, res, next){
        feedback.find({})
        .then(feedbacks =>{
            feedbacks=feedbacks.map(feedback => feedback.toOject())
            res.render("feedback/system",{
                feedbacks: feedbacks
            })
        })
        .catch(err =>{
            console.error(err)
            res.status(500).send('có lỗi xảy ra với sever')
        })
        
    }
    
    //add feedback
    addfeedback(req, res, next){
        if(req.cookies.token){
            jwt.verify(req.cookies.token, 'nhom21', function (err, tokendata){
                if(err){
                    console.error(err)
                    res.send('xác thực tài khoản thất bại')
                }
                else{
                    user.findOne({account: tokendata.account})
                    .then(userdata => {
                        var formData =  req.body
                        formData.username = userdata.username
                        formData.userrole = userdata.role
                        var feedbackdata = new feedback(formData)
                        feedbackdata.save()
                        .then( data  => {
                            console.log('thêm bình luận thành công')
                        })
                        .catch(err => {
                            console.log(err)
                            res.status(500).send('có lỗi xẩy ra ở sever')
                        })
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).send('có lỗi xảy ra ở sever')
                    })
                }
            })
        }
        else{
            console.log('vui lòng đăng nhập')
        }
    }

}

module.exports = new feedbackController