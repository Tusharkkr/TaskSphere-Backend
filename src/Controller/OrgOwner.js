const mongoose = require("mongoose")
const { Organization } = require("../Models/OrgSchema")
const { AppError } = require("../Utils/AppError")
const validator = require('validator')
const { User } = require("../Models/UserSchema")
const bcrypt = require('bcrypt')


//! For Organization

const createOrg = async (req, res) => {
    const { name, isActive } = req.body

    if (name.trim().length > 30 || name.trim().length < 2 || !name.trim()) {
        throw new AppError(400, 'Invalid Name')
    }

    let createOrg = await Organization.create({ name, isActive, createdBy: req.User._id })

    res.status(200).json({
        msg: "Success",
        data: createOrg
    })
}

const getAllOrg = async (req, res) => {

    const { limit, skip } = req.query

    const foundAllQrg = await Organization.find().limit(limit).skip(skip * limit)

    // console.log(foundAllQrg)

    res.status(200).json({
        msg: "Success",
        data: foundAllQrg
    })

}

const getSingleOrg = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(400, "Invalid Id")
    }

    let findOrg = await Organization.findById(id)

    if (!findOrg) {
        throw new AppError(400, "Organization not found")
    }

    res.status(200).json({
        msg: "Success",
        data: findOrg
    })

}

const SoftdeleteOrg = async (req, res) => {
    const { id } = req.params

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(400, "Invalid Id")
    }

    const findUser = await Organization.findByIdAndUpdate(id, { isActive: false }, { returnDocument: "after" })

    if (!findUser) {
        throw new AppError(404, "Organization does not exists")
    }

    res.status(200).json({
        msg: "Success",
        data: findUser
    })
}

const EditOrg = async (req, res) => {
    const { id } = req.params
    const { name, isActive } = req.body

    if (name.trim().length > 30 || name.trim().length < 2 || !name.trim()) {
        throw new AppError(400, 'Invalid Name')
    }

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(400, "Invalid Id")
    }

    const findUser = await Organization.findByIdAndUpdate(id, { name, isActive }, { returnDocument: "after", runValidators: true })

    if (!findUser) {
        throw new AppError(400, "Organization does not exists")
    }

    res.status(200).json({
        msg: "Success",
        data: findUser
    })

}


//! For Admin

const createAdmin = async (req, res) => {
    const { id } = req.params
    const { name, email, password } = req.body

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(400, "Invalid Id")
    }

    const OrgDetail = await Organization.findById(id)

    // console.log(OrgDetail)

    if (!OrgDetail) {
        throw new AppError(400, "Organization not found")
    }

    if (name.trim().length > 30 || name.trim().length < 2 || !name.trim()) {
        throw new AppError(400, 'Invalid Name')
    }

    if (!validator.isEmail(email)) {
        throw new AppError(400, `${email} is not a valid Email`)
    }

    if (!validator.isStrongPassword(password)) {
        throw new AppError(400, `${password} is not a strong password`)
    }

    let HashPass = await bcrypt.hash(password, 10)

    console.log('OrgDetail.isActice : ', OrgDetail.isActice)

    const Admin = await User.create({
        name,
        email,
        password: HashPass,
        role: "admin",
        isActive: OrgDetail.isActive,
        organization: OrgDetail._id
    })
    console.log('id', id)

    res.status(200).json({
        msg: "Success",
        data: Admin,
        OrgStatus: OrgDetail.isActive ? 'Organization is ACTIVE' : 'Organization is INACTIVE'
    })

}

const AllAdmins = async (req, res) => {
    const { id } = req.params

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(400, "Invalid Id")
    }

    const OrgDetail = await Organization.findById(id)

    if (!OrgDetail) {
        throw new AppError(400, "Organization not found")
    }

    const AllAdm = await User.find({
        role: 'admin',
        orgination: OrgDetail._id
    })


    if (AllAdm.length == 0) {
        throw new AppError(400, "No Admins in this Org")
    }

    res.status(200).json({
        msg: "Success",
        data: AllAdm,
        message: OrgDetail.isActive ?
            `Organization ACTIVE` :
            `Organization INACTIVE`
    })

}

const SingleAdmin = async (req, res) => {
    const { id } = req.params

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(400, "Invalid Id")
    }

    const Single = await User.find({_id:id,role:"admin"})

    if (Single.length==0) {
        throw new AppError(400, "Admin not found")
    }


    const foundOrg = await Organization.findById(Single[0].organization)


    res.status(200).json({
        msg:"Success",
        data:Single[0],
        message: foundOrg.isActive ?
            `Organization ACTIVE` :
            `Organization INACTIVE`
    })

}

const ActivateAdmin = async (req,res) => {
    const { id } = req.params

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(400, "Invalid Id")
    }

    const Single = await User.findById(id)

    if (Single.length==0) {
        throw new AppError(400, "Admin not found")
    }

    Single.isActive = true

    await Single.save()

    res
    .status(200)
    .json({
        message : `${Single.name} activated successfully`,
        data : Single
    })

}

const DeActivateAdmin = async (req,res) => {
    const { id } = req.params

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        throw new AppError(400, "Invalid Id")
    }

    const Single = await User.findById(id)

    if (Single.length==0) {
        throw new AppError(400, "Admin not found")
    }

    Single.isActive = false

    await Single.save()

    res
    .status(200)
    .json({
        message : `${Single.name} Deactivated successfully`,
        data : Single
    })
}


module.exports = {
    createOrg, getAllOrg, getSingleOrg, SoftdeleteOrg, EditOrg, createAdmin, AllAdmins, SingleAdmin, ActivateAdmin, DeActivateAdmin
}