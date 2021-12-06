
class siteController{
    
    // home
    index(req, res, next){
        res.render('site/home')
    }

    //login
    login(req, res, next){
        res.render('site/login')
    }
    
    //register
    register(req, res, next){
        res.render('site/register')
    }

    //admin-page
    adminpage(req, res, next){
        res.render('site/adminpage')
    }

}

module.exports = new siteController