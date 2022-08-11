const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Ingredient = sequelize.define('ingredient', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.INTEGER },
  type: { type: DataTypes.STRING },
});

module.exports = Ingredient;
