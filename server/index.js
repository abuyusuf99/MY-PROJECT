const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(cors())
app.use(require('./routes/Product.route'))
app.use(require('./routes/Flacons.route'))
app.use(require("./routes/Cart.route"))


mongoose.connect("mongodb+srv://Muslim:***Muslim95@cluster0.b4yowf9.mongodb.net/Parfume")
.then(()=>{console.log("Сервер подключен...");})
.catch(()=>{console.log('Ошибка подключения к MangoDB');})

app.listen(5000, ()=>{
    console.log("Сервер запущен");
})