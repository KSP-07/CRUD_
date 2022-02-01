 const express = require('express')
 const mongoose = require('mongoose')
const url= 'mongodb://localhost/MyFirstDb'

 const app=express()


 mongoose.connect(url,{useNewUrlParser:true})
const conn = mongoose.connection

conn.on('open',() =>{
    console.log('connected..')
})

app.use(express.json())

const apiRouter =require('./routers/api_routes')
app.use('/api',apiRouter)

app.listen(2000,()=>{
    console.log('Server started')
})