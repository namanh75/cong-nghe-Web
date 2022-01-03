const moongose = require('moongose')
const Schema = moongose.Schema

const users=new Schema({
    account: {type: String, unique: true},
    password: String,
    name: String, 
    age: Number,
    gender: String,
    address: String,
    role: String,
    description: String,
}, {
    timestamp: true,
})

module.exports = moongose.model('users', users)