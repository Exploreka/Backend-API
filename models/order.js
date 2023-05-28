/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define('order', {
    'id_order': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 1
    },
    'id_user': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'id_tour_package': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'qty_order': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'total_bill': {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "null"
    },
    'trip_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'status': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'order',
    timestamps: true,
    freezeTableName: true
  });
  return Order
};
