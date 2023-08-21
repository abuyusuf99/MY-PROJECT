const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    instock: Boolean,
    number: Number,
    description: String

})
const Product = mongoose.model('Product', productSchema)

module.exports = Product