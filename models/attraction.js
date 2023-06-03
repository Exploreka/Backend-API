/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Attraction = sequelize.define('attraction', {
    'id_attraction': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 1
    },
    'name_attraction': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'price_attraction': {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "null"
    },
    'desc_attraction': {
      type: DataTypes.STRING(2500),
      allowNull: true,
      comment: "null"
    },
    'photo_attraction': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'address_attraction': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'coordinate_attraction': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'rating_avg_attraction': {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "null"
    },
    'open_hour': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'close_hour': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'attraction',
    timestamps: false,
    freezeTableName: true
  });
  return Attraction
};
