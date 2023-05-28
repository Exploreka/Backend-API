/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Wishlist_Tour_Package =  sequelize.define('wishlist_tour_package', {
    'id_wishlist_tour_package': {
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
      comment: "null",
      foreignKey: {
        references: {
          table: 'user',
          column: 'id_user'
        }
      }
    },
    'id_tour_package': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null",
      foreignKey: {
        references: {
          table: 'tour_package',
          column: 'id_tour_package'
        }
      }
    }
  }, {
    tableName: 'wishlist_tour_package',
    timestamps: true,
    freezeTableName: true
  });
  return Wishlist_Tour_Package
};