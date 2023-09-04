const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    instock: Boolean,
    description: String,
    reviews: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Reviews"
    }

})
const Product = mongoose.model('Product', productSchema)

module.exports = Product