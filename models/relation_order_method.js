/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const Relation_Order_Method = sequelize.define('relation_order_method', {
      'id_order': {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "null",
        primaryKey: true
      },
      'id_method': {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "null",
        primaryKey: true
      }
    }, {
      tableName: 'relation_order_method',
      timestamps: true,
      freezeTableName: true
  });
  return Relation_Order_Method
};