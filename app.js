 const express = require('express')
 const mongoose = require('mongoose')
const url= 'mongodb://localhost/AlienDBexg'

 const app=express()


 mongoose.connect(url,{useNewUrlParser:true})
const conn = mongoose.connection

conn.on('open',() =>{
    console.log('connected..')
})

app.use(express.json())

const alienRouter =require('./routers/aliens')
app.use('/aliens',alienRouter)

app.listen(9000,()=>{
    console.log('Server srarted')
})