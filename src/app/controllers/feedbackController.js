

class feedbackController{
    
    // service quality
    service(req, res, next){
        res.render('feedback/service')
    }

    //system quality
    system(req, res, next){
        res.render("feedback/system")
    }

    //select: service or system
    select(req, res, next){
        res.render("feedback/select")
    }
}

module.exports = new feedbackController