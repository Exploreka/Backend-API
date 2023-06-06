/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Tour_package_category = sequelize.define('tour_package_category', {
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
    tableName: 'tour_package_category',
    timestamps: false,
    freezeTableName: true
  });
  return Tour_package_category
};
