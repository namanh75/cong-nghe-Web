

class feedbackController{
    
    // service quality
    service(req, res, next){
        res.send("service quality")
    }

    //system quality
    system(req, res, next){
        res.render("system quality")
    }

    //select: service or system
    index(req, res, next){
        res.render("select service or system")
    }
}

module.exports = new feedbackController