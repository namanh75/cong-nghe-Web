

class infoController{
    
    // info of user
    info(req, res, next){
        res.render("infoUser/userInfo")
    }
    
}

module.exports = new infoController