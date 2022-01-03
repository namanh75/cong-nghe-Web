const moongose = require('moongose')
const Schema = moongose.Schema

const schedules=new Schema({
    iduser: String,
    username: String,
    iddoctor: String, 
    doctorname: String,
    time: String,
    mode: String,
    description: String,
}, {
    timestamp: true,
})

module.exports = moongose.model('schedules', schedules)