/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Attraction_category = sequelize.define('attraction_category', {
    'id_attraction_cat': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      primaryKey: true,
      autoIncrement: true,
      initialAutoIncrement: 1
    },
    'name_attraction_cat': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'attraction_category',
    timestamps: true,
    freezeTableName: true
  });
  return Attraction_category
};
