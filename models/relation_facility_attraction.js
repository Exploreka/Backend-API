/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('relation_facility_attraction', {
    'id_facility': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true
    },
    'id_attraction': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true
    }
  }, {
    tableName: 'relation_facility_attraction'
  });
};
