const Reviews = require('../model/Reviews.model')


module.exports.reviewsControllers = {
    createReview: async (req,res)=>{
        try {
            const data = await Reviews.create({
               text: req.body.text,
               user: req.body.user,
               productId: req.body.productId
            })
          return  res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    patchReview: async (req,res)=>{
        try {
            const data = await Reviews.findByIdAndUpdate(req.params.id, req.body)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    deleteReview: async(req,res)=>{
        try {
            const data = await Reviews.findByIdAndRemove(req.params.id)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    getReviews: async(req,res)=>{
try {
    const data = await Reviews.find({}).populate('user')

    res.json(data)
} catch (error) {
    res.json(error)
}
    }
}