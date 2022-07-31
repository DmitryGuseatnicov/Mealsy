const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Dish = sequelize.define('dish', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING },
});

module.exports = Dish;
