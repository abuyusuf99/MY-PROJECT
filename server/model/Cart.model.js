const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    productId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Product"
    },

})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart