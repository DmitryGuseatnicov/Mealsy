const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');

class DishBook extends Model {}

DishBook.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: 'dish_book',
  }
);

module.exports = DishBook;
