const { AppError } = require("../Utils/AppError")


const IsActiveOrg = (req, res, next) => {
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("req.User.organization.isActive",req.User)
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    if (req.User.role == "owner") {
        next()
    }
    else {
        if (req.User.organization.isActive == false) {
            console.log('DoneDone')
            throw new AppError(400, "Organization is Not Active")
        }
        next()
    }
    
}

module.exports = { IsActiveOrg }