/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    const Blog_post = sequelize.define('blog_post', {
      'id_post': {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "null",
        primaryKey: true,
        autoIncrement: true,
        initialAutoIncrement: 1
      },
      'image_post': {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "null"
      },
      'headline_post': {
        type: DataTypes.STRING,
        allowNull: true,
        comment: "null"
      },
      'content_post': {
        type: DataTypes.STRING(10000),
        allowNull: true,
        comment: "null"
      },
    }, {
      tableName: 'blog_post',
      timestamps: true,
      freezeTableName: true
    });
    return Blog_post
  };
  