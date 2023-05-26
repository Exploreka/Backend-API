/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Review = sequelize.define('review', {
    'id_review': {
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
    'id_attraction': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'id_user': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
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
    tableName: 'review',
    timestamps: true,
    freezeTableName: true
  });
  return Review
};
