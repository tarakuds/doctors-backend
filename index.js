const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 5000

const userRouter = require('./route/user.route')

app.use('/go', userRouter)

mongoose.connect('mongodb+srv://doctorList:75W3iqq5$xsmEms@cluster0.gvp2n.mongodb.net/doctorList?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true},
app.listen(PORT, ()=>{
    console.log("Hello");
}),
console.log('db connected'))

