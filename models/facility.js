/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Facility = sequelize.define('facility', {
    'id_facility': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 1
    },
    'name_facility': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'qty_facility': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'facility',
    timestamps: true,
    freezeTableName: true
  });
  return Facility
};
