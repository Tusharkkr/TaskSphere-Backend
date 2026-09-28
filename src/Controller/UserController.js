const express = require('express')
const { User } = require('../Models/UserSchema')
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const IsLoggedIn = require('../Middleware/IsLoggedIn')
const { AppError } = require('../Utils/AppError')


const login = async (req, res) => {
        const { email, password } = req.body

        if (!email || !password) {
            throw new AppError(400,"Enter all the Feilds")
        }

        let foundUser = await User.findOne({email})
        // console.log(foundUser)

        if(!foundUser){
            throw new AppError(400,"User not Found")
        }

        const checkPass =await bcrypt.compare(password,foundUser.password)
        
        if(!checkPass){
            throw new AppError(400,"Invalid credential3")
        }

        let token = jwt.sign({id : foundUser._id},process.env.JWT_HIDE)

        res.cookie('token',token).json({
            msg:"Success",
            data:foundUser
        })
}

const deleteContr = (req,res)=>{
    res.clearCookie('token').json({
        msg:"LogOut Success"
    })
}

const meee = (req,res)=>{

    res.status(200).json({
        msg:"Success",
        data: req.User
    })  

}


module.exports = {
    login,deleteContr,meee
}