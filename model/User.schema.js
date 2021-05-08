const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{
        type:String, 
        required:[true, 'Firstname is required'],},
    lastname:{
        type:String, 
        required:[true, 'lastname is required']},
    phonenumber:{
        type:String, 
        required:[true, 'Phone number is required']},
    email:{
        type:String, 
        required:[true, 'Email is required']},
    designation:{
        type:String,
        enum: ['admin', 'doctor', 'patient'],
        required: [true, 'select your designation'],
    },
    password:{
        type:String,
        required: [true, 'password is required']
    },
    confirmpassword:{
        type:String, 
        required:[true, 'passwords must be same']}
})

const User = mongoose.model('user', userSchema)

module.exports = User