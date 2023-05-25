//importing modules
const express = require('express')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const sequelize = require('sequelize')
const db = require('./Models')
const userRoutes = require ('./routes/userRoutes')

//setting up your port
const PORT = process.env.PORT || 8000

//assigning the variable app to express
const app = express()

//middleware
app.use(express.json())
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: false }).then(() => {
    console.log("db has been re sync")
})

//routes for the user API
app.use(userRoutes)

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))
