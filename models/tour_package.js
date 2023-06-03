/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Tour_package = sequelize.define('tour_package', {
    'id_tour_package': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 1
    },
    'name_tour_package': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'desc_tour_package': {
      type: DataTypes.STRING(2500),
      allowNull: true,
      comment: "null"
    },
    'photo_tour_package': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'price_tour_package': {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "null"
    },
    'rating_avg_tour_package': {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "null"
    },
    'start_hour': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'end_hour': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'tour_package',
    timestamps: false,
    freezeTableName: true
  });
  return Tour_package
};
