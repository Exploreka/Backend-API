/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Relation_Facility_Attraction = sequelize.define('relation_facility_attraction', {
  }, {
    tableName: 'relation_facility_attraction',
    timestamps: false,
    freezeTableName: true
  });
  return Relation_Facility_Attraction
};