const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');

class Favorites extends Model {}

Favorites.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  {
    sequelize,
    modelName: 'favorites',
  }
);

module.exports = Favorites;
