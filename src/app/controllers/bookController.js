

class bookController{
    
    // info of schedule
    info(req, res, next){
        res.render('book/info')
    }

    //book schedule
    book(req, res, next){
        res.render("book/book")
    }

}

module.exports = new bookController