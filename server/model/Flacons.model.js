const mongoose = require('mongoose')

const flaconsSchema = mongoose.Schema({
    image:String,
    name: String,
    ml: Number,
    price: Number
})

const Flacons = mongoose.model('Flacons', flaconsSchema)

module.exports = Flacons