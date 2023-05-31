/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const City = sequelize.define('city', {
    'id_city': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 1
    },
    'name_city': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'city',
    timestamps: true,
    freezeTableName: true
  });
  return City
};
