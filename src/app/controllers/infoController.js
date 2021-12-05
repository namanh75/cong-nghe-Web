

class infoController{
    
    // info of user
    info(req, res, next){
        res.send("info of user")
    }
    
}

module.exports = new infoController