const bcrypt = require("bcrypt")
const { User } = require("../Models/UserSchema")

const AddUser = (name,email,password,role) => {
    bcrypt.hash(password,10)
    .then((data)=>{
        User.create({name,email,password:data,role})
    })
}

module.exports = {
    AddUser
}