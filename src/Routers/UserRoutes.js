const express = require('express')
const router = express.Router()
const IsLoggedIn = require('../Middleware/IsLoggedIn')
const { login, deleteContr, meee } = require('../Controller/UserController')



router.post('/login',login)
router.delete('/delete-user',deleteContr)
router.get('/me',IsLoggedIn,meee)



module.exports = {
    UserRouter: router
}