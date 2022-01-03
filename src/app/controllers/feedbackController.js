

class feedbackController{
    
    //system quality
    system(req, res, next){
        res.render("feedback/system")
    }
    
    //add feedback
    addfeedback(req, res, next){
        
    }

}

module.exports = new feedbackController