/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const Wishlist_Attraction =  sequelize.define('wishlist_attraction', {
      'id_wishlist_attraction': {
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
      'id_attraction': {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "null"
      }
    }, {
      tableName: 'wishlist_attraction',
      timestamps: true,
      freezeTableName: true
    });
    return Wishlist_Attraction
  };