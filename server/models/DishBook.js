const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const DishBook = sequelize.define('dish_book', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

module.exports = DishBook;
