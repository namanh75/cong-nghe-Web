

class loginController{
    
    // info of user
    login(req, res, next){
        res.send("info of user")
    }

}

module.exports = new loginController