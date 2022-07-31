const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');

class Dish extends Model {}

Dish.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: 'dish',
  }
);

module.exports = Dish;
