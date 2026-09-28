const jwt = require('jsonwebtoken')
const { User } = require('../Models/UserSchema')
const validator = require('validator')

const IsLoggedIn = async (req,res,next) => {
    const { token }= req.cookies

    if(!token){
        return res.status(400).json({
            msg:"Failed",
            error:"Invalid Token"
        })
    }

    let validateJWT = validator.isJWT(token)


    if(!validateJWT){
        return res.status(400).json({
            msg:"Failed",
            error:"Invalid User Token"
        })
    }

    //If token is invalid error yaha se aarahi hai
    let userVerify = jwt.verify(token,process.env.JWT_HIDE)

    let UserDetails = await User.findById(userVerify.id).populate("organization")

    if(!UserDetails){
        return res.status(400).json({
            msg:"Failed",
            error:"User Not Found"
        })
    }

    req.User = UserDetails

    next()
}

module.exports = IsLoggedIn