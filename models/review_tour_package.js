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
    'rating': {
      type: DataTypes.FLOAT,
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
