const mongoose = require("mongoose")
const { Task } = require("../Models/TaskSchema")
const { AppError } = require("../Utils/AppError")


//!  copy paste kra hai bs 

const E_getAllTasks = async(req, res) => {

    console.log(req.User)
    
    const id = req.User._id

    const allTasks = await Task.find({
        assignedTo : id
    })

    res
    .status(200)
    .json({
        data : allTasks
    })


}

const E_getTaskById = async(req, res) => {

    const{ taskId } = req.params

    if(!mongoose.Types.ObjectId.isValid(taskId))
    {
        throw new AppError(400, "Invalid Task ID")
    }

    const data = await Task.findOne({
        _id : taskId,
        assignedTo : req.User._id
    })

    if(!data)
    {
        throw new AppError(404, "Task not found")
    }

    res
    .status(200)
    .json({
        msg:"Success",
        data
    })

}

const E_updateTaskEmployee = async(req, res) => {

    const{ status } = req.body
    const{ taskId } = req.params

    if(!mongoose.Types.ObjectId.isValid(taskId))
    {
        throw new AppError(400, "Invalid Task ID")
    }

    if(!status || !["todo", "in-progress", "completed"].includes(status))
    {
        throw new AppError(400, "Invalid Status")
    }

    const data = await Task.findOneAndUpdate({
        _id : taskId,
        assignedTo : req.User._id
    }, {
        status
    },{
        runValidators : true,
        returnDocument : "after"
    })


    if(!data){
        throw new AppError(404, "Task not found")
    }

    res
    .status(200)
    .json({
        message : 'Task updated',
        data
    })

}


module.exports = {
    E_getAllTasks,
    E_getTaskById,
    E_updateTaskEmployee
}