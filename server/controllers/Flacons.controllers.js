const Flacons = require('../model/Flacons.model')


module.exports.flaconsControllers = {
    createFlacons: async (req,res)=>{
        try {
            const data = await Flacons.create({
                image: req.body.image,
                name: req.body.name,
                ml:req.body.ml,
                price: req.body.price
            })
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    patchFlacons: async (req,res)=>{
        try {
            const data = await Flacons.findByIdAndUpdate(req.params.id, req.body)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    deleteFlacons: async(req,res)=>{
        try {
            const data = await Flacons.findByIdAndRemove(req.params.id)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    getFlacons: async(req,res)=>{
try {
    const data = await Flacons.find({})
    res.json(data)
} catch (error) {
    res.json(error)
}
    }
}