const { AppError } = require("../Utils/AppError")


const IsActiveOrg = (req, res, next) => {

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