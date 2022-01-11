const mongoose = require('mongoose')
const Schema = mongoose.Schema

const users=new Schema({
    account: {type: String, unique: true},
    password: String,
    name: String, 
    age: Number,
    gender: String,
    address: String,
    role: Number,
    description: String,
    stt: String,
}, {
    timestamp: true,
})

module.exports = mongoose.model('users', users)