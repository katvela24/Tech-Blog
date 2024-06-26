const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Blog model and datatypes, including the user_id foreign key.
class Blog extends Model {}

Blog.init(
  {
    title: {
        type: DataTypes.STRING,
        allowNull:false
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },

    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog'
  }
);

module.exports = Blog;