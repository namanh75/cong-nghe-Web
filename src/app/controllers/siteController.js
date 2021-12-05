
class siteController{
    
    // info of user
    index(req, res, next){
        res.send("info of user")
    }
    
    adminpage(req, res, next){
        res.send("views")
    }

}

module.exports = new siteController