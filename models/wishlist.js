/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Wishlist =  sequelize.define('wishlist', {
    'id_wishlist': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 1
    },
    'id_tour_package': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'id_user': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'wishlist',
    timestamps: true,
    freezeTableName: true
  });
  return Wishlist
};
