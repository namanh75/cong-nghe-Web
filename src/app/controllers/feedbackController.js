

class feedbackController{
    
    //system quality
    system(req, res, next){
        res.render("feedback/system")
    }

}

module.exports = new feedbackController