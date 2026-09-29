const { AppError } = require("../Utils/AppError")

const IsAuthorize = (...rest) => {
    return (req,res,next) => {
        
        // console.log(rest,req.User)

        if(!rest.includes(req.User.role)){
            throw new AppError(403,'Unauthorised Operation')
        } 

        next()
        // console.log(rest,req.User)
    }
}

module.exports = {IsAuthorize}