const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const DishBookRecept = sequelize.define('dish_book_recept', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

module.exports = DishBookRecept;
