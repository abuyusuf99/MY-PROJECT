const Product = require('../model/Product.model')

module.exports.productControllers = {
    createProduct: async (req,res)=>{
        try {
            const data = await Product.create({
                image: req.body.image,
                name: req.body.name,
                price: req.body.price,
                instock: req.body.instock,
                description: req.body.description

            })
            
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    patchProduct: async (req,res)=>{
        try {
            const data = await Product.findByIdAndUpdate(req.params.id, req.body)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    deleteProduct: async(req,res)=>{
        try {
            const data = await Product.findByIdAndRemove(req.params.id)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    getProducts: async(req,res)=>{
try {
    const data = await Product.find({})
    res.json(data)
} catch (error) {
    res.json(error)
}
    }
}