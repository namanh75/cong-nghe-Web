

class bookController{
    
    // info of schedule
    info(req, res, next){
        res.send("info of user")
    }

    //book schedule
    book(req, res, next){
        res.send("book schedule")
    }

}

module.exports = new bookController