const Cart = require('../model/Cart.model')


module.exports.cartControllers = {
    createCart: async (req,res)=>{
        try {
            const data = await Cart.create({
                productId: req.body.productId,
            })
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    patchCart: async (req,res)=>{
        try {
            const data = await Cart.findByIdAndUpdate(req.params.id, req.body)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    deleteCart: async(req,res)=>{
        try {
            const data = await Cart.findByIdAndRemove(req.params.id)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    getCart: async(req,res)=>{
try {
    const data = await Cart.find({})
    res.json(data)
} catch (error) {
    res.json(error)
}
    }
}