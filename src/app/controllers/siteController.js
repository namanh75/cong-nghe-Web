
class siteController{
    
    // home
    index(req, res, next){
        res.render('site/home')
    }

    //login
    login(req, res, next){
        res.render('site/login')
    }

    //loginpost
    loginpost(req, res, next){

    }
    
    //register
    register(req, res, next){
        
    }

    //admin-page
    adminpage(req, res, next){
        res.render('site/adminpage')
    }

}

module.exports = new siteController