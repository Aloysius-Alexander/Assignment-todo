const express = require('express')
const mongoose = require('mongoose')
const url= 'mongodb://localhost/AchuDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', ()=>{
    console.log('connected...')
})

app.use(express.json())

const todoRouter = require('./routes/todos')
app.use('/todos', todoRouter)

app.listen(3001, ()=>{
    console.log('Server started')
})