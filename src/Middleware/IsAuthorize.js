const { AppError } = require("../Utils/AppError")

const IsAuthorize = (...rest) => {
    return (req,res,next) => {
        if(!rest.includes(req.User.role)){
            throw new AppError(403,'Unauthorised Operation')
        }
        next()
    }
}

module.exports = {IsAuthorize}