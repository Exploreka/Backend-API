/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Package_category = sequelize.define('package_category', {
    'id_package_cat': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 1
    },
    'name_package_cat': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'package_category',
    timestamps: true,
    freezeTableName: true
  });
  return Package_category
};
