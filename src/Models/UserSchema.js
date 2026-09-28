const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        minLength : 2,
        maxLength : 20,
        immutable : true
    },
    email : {
        type : String,
        unique : true,
        required : true,
        validate : {
            message : "{VALUE} is not a valid email",
            validator : (info)=>{
                return validator.isEmail(info)
            }
        }
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : {
            values : ["owner","admin","employee"],
            message : "{VALUE} is not a valid role"
        },
        required : true,
        trim : true
    },
    organization : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"Org"
    },
    teamId : {
        type : mongoose.Schema.Types.ObjectId
    },
    isActive : {
        type : Boolean,
        default : true
    }
},{timestamps:true})


const User = mongoose.model('User',UserSchema)

module.exports = {
    User
}