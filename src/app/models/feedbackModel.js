const mongoose = require('mongoose')
const Schema = mongoose.Schema

const feedbacks=new Schema({
    username: String,
    userrole: String, 
    title: String,
    content: String,
}, {
    timestamp: true,
})

module.exports = mongoose.model('feedbacks', feedbacks)