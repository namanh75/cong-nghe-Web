const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schedules=new Schema({
    iduser: String,
    username: String,
    iddoctor: String, 
    doctorname: String,
    phone: String,
    birthday: String,
    address: String,
    time: String,
    description: String,
    
}, {
    timestamp: true,
})

module.exports = mongoose.model('schedules', schedules)