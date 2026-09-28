const mongoose = require("mongoose")

const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true,
    },
    isActive : {
        type: Boolean,
        dafault:true
    },
    organization : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Org',
        required:true
    },
    admin : {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
},{timestamps:true})

TeamSchema.index(
    {organization:1,name:1},
    {unique:true}
)

let Team = mongoose.model('team',TeamSchema)
module.exports = {
    Team
}