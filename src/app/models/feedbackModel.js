const moongose = require('moongose')
const Schema = moongose.Schema

const feedbacks=new Schema({
    username: String,
    userrole: String, 
    title: String,
    content: String,
}, {
    timestamp: true,
})

module.exports = moongose.model('feedbacks', feedbacks)