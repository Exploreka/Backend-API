/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    'id_user': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      defaultValue: 404,
      startValue: 404
    },
    'email_user': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'username_user': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'password_user': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'refresh_token': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'resetTokenExpiresAt': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'fullname_user': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'address_user': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'phone_user': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'photo_user': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'otp': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    "otpVerified": {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    tableName: 'user',
    timestamps: false,
    freezeTableName: true
  });
  return User
};
