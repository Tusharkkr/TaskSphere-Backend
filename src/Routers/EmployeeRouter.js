const express = require("express")
const IsLoggedIn = require("../Middleware/IsLoggedIn")
const { IsAuthorize } = require("../Middleware/IsAuthorize")
const { IsActiveOrg } = require("../Middleware/IsActiveOrg")
const { E_getAllTasks, E_getTaskById, E_updateTaskEmployee } = require("../Controller/EmployeeController")
const router = express.Router()

  


router.get("/tasks",IsLoggedIn,IsAuthorize("employee"),IsActiveOrg,E_getAllTasks)

router.get("/tasks/:taskId",IsLoggedIn,IsAuthorize("employee"),IsActiveOrg,E_getTaskById)

router.patch("/tasks/:taskId",IsLoggedIn,IsAuthorize("employee"),IsActiveOrg,E_updateTaskEmployee)




module.exports = {
    EmployeeRouter : router
}