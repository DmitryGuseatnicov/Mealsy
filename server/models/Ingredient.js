const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');

class Ingredients extends Model {}

Ingredients.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    descriptions: { type: DataTypes.INTEGER },
  },
  {
    sequelize,
    modelName: 'recept',
  }
);

module.exports = Ingredients;
