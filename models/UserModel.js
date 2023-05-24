//user model
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define( "user", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            isEmail: true, //checks for email format
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        refresh_token: {
            type: DataTypes.TEXT
        }
    }, {
        timestamps: true,
        freezeTableName: true
    },);
    return User
}
