
class infoController{
    
    // info of user
    info(req, res, next){
        res.render("information/userInformation")
    }
    
    //update information
    update(req, res, next) {

    }

}

module.exports = new infoController