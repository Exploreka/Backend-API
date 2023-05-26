/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Payment_method = sequelize.define('payment_method', {
    'id_method': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 1
    },
    'id_order': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'name_method': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'desc_method': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'logo_method': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'payment_method',
    timestamps: true,
    freezeTableName: true
  });
  return Payment_method;
};
