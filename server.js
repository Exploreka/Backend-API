//importing modules
const express = require('express')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const session = require('express-session');
const cors = require('cors')
const sequelize = require('sequelize')
const db = require('./models')
const userRoutes = require ('./routes/userRoutes')
const partnerRoutes = require ('./routes/partnerRoutes')
const attractionRoutes = require ('./routes/attractionRoutes')
const tourPackageRoutes = require ('./routes/tourPackageRoutes')
const attractionFacilityRoutes = require ('./routes/attractionFacilityRoutes')
const tourPackageCatRoutes = require ('./routes/tourPackageCatRoutes')
const wishlistAttracttionRoutes = require ('./routes/wishlistAttractionRoutes')
const wishlistTourPackageRoutes = require ('./routes/wishlistTourPackageRoutes')
const reviewAttractionRoutes = require ('./routes/reviewAttractionRoutes')
const reviewTourPackageRoutes = require ('./routes/reviewTourPackageRoutes')
const blogRoutes = require ('./routes/blogRoutes')
const forgetPasswordRoutes = require ('./routes/forgetPasswordRoutes')
const passport = require("passport");

//setting up your port
const PORT = process.env.PORT || 8000

//assigning the variable app to express
const app = express()

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: false }).then(() => {
    console.log("db has been re sync")
})

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//middleware
app.use(express.json())
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


//routes for the user API
app.use(userRoutes)
app.use(partnerRoutes)
app.use(attractionRoutes)
app.use(tourPackageRoutes)
app.use(attractionFacilityRoutes)
app.use(wishlistAttracttionRoutes)
app.use(wishlistTourPackageRoutes)
app.use(reviewAttractionRoutes)
app.use(reviewTourPackageRoutes)
app.use(blogRoutes)
app.use(forgetPasswordRoutes)
app.use(tourPackageCatRoutes)

// Index route handler
app.get('/', (req, res) => {
    const message = 'Hi there, welcome to the Exploreka API! 👋';
    console.log('Index route accessed');
    res.send(`
        <h1>${message}</h1>
        <h2>Kindly refer to our API Documentation <a href="https://documenter.getpostman.com/view/25237784/2s93sW7a5e">here</a></h2>
    `);
});

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))
