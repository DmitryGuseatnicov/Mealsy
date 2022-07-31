const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Ingredient = sequelize.define('ingredient', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  weight: { type: DataTypes.INTEGER },
});

module.exports = Ingredient;
