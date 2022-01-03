

class bookController{
    
    // info of schedule
    info(req, res, next){
        res.render('book/info')
    }

    //book schedule
    book(req, res, next){
        res.render("book/book")
    }
    
    //book post
    bookpost(req, res, next){
        
    }

}

module.exports = new bookController