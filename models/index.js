//importing modules
const {Sequelize, DataTypes} = require('sequelize')
const dotenv = require('dotenv');

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
db.provinces = require('./province') (sequelize, DataTypes)
db.relation_facility_attractions = require('./relation_facility_attraction') (sequelize, DataTypes)
db.relation_order_methods = require('./relation_order_method') (sequelize, DataTypes)
db.relation_tour_package_cats = require('./relation_tour_package_cat') (sequelize, DataTypes)
db.review_attractions = require('./review_attraction') (sequelize, DataTypes)
db.review_tour_packages = require('./review_tour_package') (sequelize, DataTypes)
db.tour_packages = require('./tour_package') (sequelize, DataTypes)
db.wishlist_attractions = require('./wishlist_attraction') (sequelize, DataTypes)
db.wishlist_tour_packages = require('./wishlist_tour_package') (sequelize, DataTypes)

// associate attraction
db.attraction_categories.hasMany(db.attractions, { foreignKey: 'id_attraction_cat' })
db.attractions.belongsTo(db.attraction_categories, { foreignKey: 'id_attraction_cat' })
db.cities.hasMany(db.attractions, { foreignKey: 'id_city' })
db.attractions.belongsTo(db.cities, { foreignKey: 'id_city' })
db.provinces.hasMany(db.cities, { foreignKey: 'id_province' })
db.cities.belongsTo(db.provinces, { foreignKey: 'id_province' })
db.partners.hasMany(db.tour_packages, { foreignKey: 'id_partner' })
db.tour_packages.belongsTo(db.partners, { foreignKey: 'id_partner' })
db.attractions.hasMany(db.tour_packages, { foreignKey: 'id_attraction' })
db.tour_packages.belongsTo(db.attractions, { foreignKey: 'id_attraction' })
db.attractions.belongsToMany(db.facilities, { 
    through: "relation_facility_attraction",
    as: "facilities",
    foreignKey: "id_attraction"
})
db.facilities.belongsToMany(db.attractions, {
    through: "relation_facility_attraction",
    as: "attractions",
    foreignKey: "id_facility"})
db.tour_packages.belongsToMany(db.package_categories, { 
    through: "relation_tour_package",
    as: "package_categories",
    foreignKey: "id_tour_package"
})
db.package_categories.belongsToMany(db.tour_packages, {
    through: "relation_tour_package",
    as: "tour_packages",
    foreignKey: "id_package_cat"})

// associate wishlist attraction
db.attractions.hasMany(db.wishlist_attractions, { foreignKey: 'id_wishlist_attraction' })
db.wishlist_attractions.belongsTo(db.attractions, { foreignKey: 'id_wishlist_attraction' })
db.user.hasMany(db.wishlist_attractions, { foreignKey: 'id_user' })
db.wishlist_attractions.belongsTo(db.cities, { foreignKey: 'id_user' })

// sync alter
db.attraction_categories.sync({ alter: true })
db.attractions.sync({ alter: true })
db.tour_packages.sync({ alter: true })
db.package_categories.sync({ alter: true })
db.cities.sync({ alter: true })

db.provinces.sync({ alter: true })
db.partners.sync({ alter: true })
db.relation_facility_attractions.sync({ alter: true })
db.relation_tour_package_cats.sync({ alter: true })
db.user.sync({ alter: true })
db.wishlist_attractions.sync({ alter: true })


//exporting the module
module.exports = db
