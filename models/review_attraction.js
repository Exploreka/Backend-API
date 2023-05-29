/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const Review_Attraction = sequelize.define('review_attraction', {
      'id_review_attraction': {
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
      },
      'rating': {
        type: DataTypes.DOUBLE,
        allowNull: true,
        comment: "null",
      },
      'comment': {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "null"
      }
    }, {
      tableName: 'review_attraction',
      timestamps: true,
      freezeTableName: true
    });
    return Review_Attraction
  };
  