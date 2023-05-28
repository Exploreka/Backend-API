/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Relation_Tour_Package_Cat =  sequelize.define('relation_tour_package_cat', {
    'id_package_cat': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true,
      foreignKey: {
        references: {
          table: 'package_category',
          column: 'id_package_cat'
        }
      }
    },
    'id_tour_package': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true,
      foreignKey: {
        references: {
          table: 'tour_package',
          column: 'id_tour_package'
        }
      }
    }
  }, {
    tableName: 'relation_tour_package_cat',
    timestamps: true,
    freezeTableName: true
  });
  return Relation_Tour_Package_Cat
};
