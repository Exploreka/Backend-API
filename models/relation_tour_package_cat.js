/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Relation_Tour_Package_Cat =  sequelize.define('relation_tour_package_cat', {
  }, {
    tableName: 'relation_tour_package_cat',
    timestamps: true,
    freezeTableName: true
  });
  return Relation_Tour_Package_Cat
};
