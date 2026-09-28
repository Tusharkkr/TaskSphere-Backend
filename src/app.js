require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const { AddOwner } = require('./Utils/AddUser')
const { UserRouter } = require('./Routers/UserRoutes')
const { OrgRouter } = require('./Routers/OrgRouter')
const { TeamRouter } = require('./Routers/TeamRouter')
const cp = require("cookie-parser");

let app = express()
app.use(cp())
app.use(express.json())
app.use('/api/users',UserRouter)
app.use('/api/org',OrgRouter)
app.use('/api/team',TeamRouter)



mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log("Database Connected")

        // AddOwner('Tushar',"tusharkumar2996@gmail.com","TusharKumar@!123","owner")

        let PORT = process.env.PORT || 9999
        app.listen(PORT, () => {
            console.log('Server Running')
        })
    })
    .catch((error)=>{
        console.log("DB Error")
    })


app.use((err, req, res, next)=>{
    console.log(err)
    res.status(err.status || 400).json({
        msg:"Failed",
        error:err.message
    })
})