

class doctorController{

    //list of doctor
    info(req, res, next){
        res.render('doctor/doctor')
    }

    //form schedule
    schedule(req, res, next){
        res.render('doctor/schedule')
    }

    //post book schedule
    book(req, res, next){
        
    }
}

module.exports = new doctorController