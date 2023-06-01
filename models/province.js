/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Province = sequelize.define('province', {
    'id_province': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 1
    },
    'name_province': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'province',
    timestamps: false,
    freezeTableName: true
  });
  return Province
};
