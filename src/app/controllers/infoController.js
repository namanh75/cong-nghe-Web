

class infoController{
    
    // info of user
    info(req, res, next){
        res.render("infoUser/userInfo")
    }
    
    //update information
    updateinfo(req, res, next) {

    }

}

module.exports = new infoController