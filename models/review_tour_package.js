/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Review_Tour_Package = sequelize.define('review_tour_package', {
    'id_review_tour_package': {
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
    },
    'rating': {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "null"
    },
    'comment': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'review_tour_package',
    timestamps: true,
    freezeTableName: true
  });
  return Review_Tour_Package
};
