/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const Relation_Order_Method = sequelize.define('relation_order_method', {
      'id_order': {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "null",
        primaryKey: true,
        foreignKey: {
          references: {
            table: 'order',
            column: 'id_order'
          }
        }
      },
      'id_method': {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "null",
        primaryKey: true,
        foreignKey: {
          references: {
            table: 'payment_method',
            column: 'id_method'
          }
        }
      }
    }, {
      tableName: 'relation_order_method',
      timestamps: true,
      freezeTableName: true
  });
  return Relation_Order_Method
};