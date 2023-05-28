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
        comment: "null",
        foreignKey: {
            references: {
              table: 'user',
              column: 'id_user'
            }
          }
      },
      'id_attraction': {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "null",
        foreignKey: {
            references: {
              table: 'attraction',
              column: 'id_attraction'
            }
          }
      }
    }, {
      tableName: 'wishlist_attraction',
      timestamps: true,
      freezeTableName: true
    });
    return Wishlist_Attraction
  };