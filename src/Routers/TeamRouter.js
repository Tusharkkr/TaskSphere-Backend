const express = require('express')
const IsLoggedIn = require('../Middleware/IsLoggedIn')
const { IsAuthorize } = require('../Middleware/IsAuthorize')
const { createTeam, getAllTeams, getTeamById, deleteTeam, updateTeam, createEmployee, getAllEmployeesByTeamId, deleteEmployee, updateEmployee, getSingleEmployeesByTeamId, createTask, getAllTasks, getTaskById, deleteTask, updateTask } = require('../Controller/adminTeam')
const { IsActiveOrg } = require('../Middleware/IsActiveOrg')
const router = express.Router()



//!  Create Team Api's

router.post('/create', IsLoggedIn, IsAuthorize("admin"), IsActiveOrg, createTeam)
router.get('/all-team', IsLoggedIn, IsAuthorize("admin"), IsActiveOrg, getAllTeams)
router.get('/get-single/:id', IsLoggedIn, IsAuthorize("admin"), IsActiveOrg, getTeamById)
router.delete('/delete/:id', IsLoggedIn, IsAuthorize("admin"), IsActiveOrg, deleteTeam)
router.patch('/edit/:id', IsLoggedIn, IsAuthorize("admin"), IsActiveOrg, updateTeam)


//!  Create Employees Api's

router.post('/employee/:teamId', IsLoggedIn, IsAuthorize("admin"), IsActiveOrg, createEmployee)
router.get('/all-employee/:teamId', IsLoggedIn, IsAuthorize("admin"), IsActiveOrg, getAllEmployeesByTeamId)
router.get('/single-employee/:employeeId', IsLoggedIn, IsActiveOrg, IsAuthorize("admin"), getSingleEmployeesByTeamId)
router.delete('/softdel-employee/:employeeId', IsLoggedIn, IsAuthorize("admin"), IsActiveOrg, deleteEmployee)
router.patch('/update-employee/:employeeId', IsLoggedIn, IsAuthorize("admin"), IsActiveOrg, updateEmployee)


//!  Admin Task Create Api's

router.post('/employee-task/:employeeId', IsLoggedIn, IsAuthorize("admin"), IsActiveOrg, createTask)
router.get('/all-employees-task', IsLoggedIn, IsAuthorize("admin"), IsActiveOrg, getAllTasks)
router.get('/single-employees-task/:taskId', IsLoggedIn, IsAuthorize("admin"), IsActiveOrg, getTaskById)
router.delete('/delete-employees-task/:taskId', IsLoggedIn, IsAuthorize("admin"), IsActiveOrg,deleteTask)
router.patch('/update-employees-task/:taskId', IsLoggedIn, IsAuthorize("admin"), IsActiveOrg, updateTask)



module.exports = {
    TeamRouter : router
}