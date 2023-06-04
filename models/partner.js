/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Partner = sequelize.define('partner', {
    'id_partner': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 1
    },
    'email_partner': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'username_partner': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'password_partner': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'refresh_token': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'fullname_partner': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'desc_partner': {
      type: DataTypes.STRING(2500),
      allowNull: true,
      comment: "null"
    },
    'address_partner': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'phone_partner': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'photo_partner': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'partner',
    timestamps: true,
    freezeTableName: true
  });
  return Partner
};
