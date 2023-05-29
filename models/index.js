//importing modules
const {Sequelize, DataTypes} = require('sequelize')
const dotenv = require('dotenv')

dotenv.config();

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5433
//database name is discover
const sequelize = new Sequelize(process.env.DATABASE_LINK, {dialect: "postgres"})

//checking if connection is done
sequelize.authenticate().then(() => {
    console.log(`Database connected to discover`)
}).catch((err) => {
    console.log(err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

//connecting to model
db.attraction_categories = require('./attraction_category') (sequelize, DataTypes)
db.attractions = require('./attraction') (sequelize, DataTypes)
db.users = require('./user') (sequelize, DataTypes)
db.cities = require('./city') (sequelize, DataTypes)
db.facilities = require('./facility') (sequelize, DataTypes)
db.orders = require('./order') (sequelize, DataTypes)
db.package_categories = require('./package_category') (sequelize, DataTypes)
db.partners = require('./partner') (sequelize, DataTypes)
db.payment_methods = require('./payment_method') (sequelize, DataTypes)
db.provinces = require('./relation_facility_attraction') (sequelize, DataTypes)
db.relation_facility_attractions = require('./relation_facility_attraction') (sequelize, DataTypes)
db.relation_order_methods = require('./relation_order_method') (sequelize, DataTypes)
db.relation_tour_package_cats = require('./relation_tour_package_cat') (sequelize, DataTypes)
db.review_attractions = require('./review_attraction') (sequelize, DataTypes)
db.review_tour_packages = require('./review_tour_package') (sequelize, DataTypes)
db.tour_packages = require('./tour_package') (sequelize, DataTypes)
db.wishlist_attractions = require('./wishlist_attraction') (sequelize, DataTypes)
db.wishlist_tour_packages = require('./wishlist_tour_package') (sequelize, DataTypes)

//exporting the module
module.exports = db
