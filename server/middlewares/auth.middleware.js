const jwt = require('jsonwebtoken')
 
module.exports = async (req,res,next)=>{
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).json({error: "auth filed"});

    }
    const [type, token] = authorization.split(' ')
    if(type !== 'Bearer'){
        return res.status(401).json({error: "wrong type of token"}) 
    }
    try {
        req.user = jwt.verify(token, process.env.SECRET_JWT_KEY)
        next()
    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}