const user = require('../models/userModel')
const jwt = require('jsonwebtoken')

class doctorController {

    //list of doctor
    info(req, res, next) {
        user.find({ role: '2' })
            .then(doctors => {
                doctors = doctors.map(user => user.toObject())
                res.render('doctor/doctor', {
                    doctors: doctors
                })
            })
    }

    //form schedule
    schedule(req, res, next) {
        user.findOne({ name: req.query.d })
            .then(doctor => {
                doctor = doctor ? doctor.toObject() : doctor
                res.render('doctor/schedule', {
                    doctor: doctor
                })
            })
            .catch(err => {
                console.error(err)
                res.status(500).send('có lỗi xảy ra ở sever')
            })

    }

    //post book schedule
    book(req, res, next) {
        
    }
}

module.exports = new doctorController