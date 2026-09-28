const mongoose = require('mongoose')

const OrgSchema = mongoose.Schema({
    name:{
        type:String,
        minLength:2,
        maxLength:100,
        require:true,
        unique:true,
        trim:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        immutable:true,
        ref:"User"
    },
    isActive:{
        type:Boolean,
        default:true
    },
}, {timestamps : true})

let Organization = mongoose.model('Org',OrgSchema)

module.exports = {
    Organization
}