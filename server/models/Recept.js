const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Recept = sequelize.define('recept', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING },
  cookingTime: { type: DataTypes.INTEGER },
  descriptions: { type: DataTypes.INTEGER },
});

module.exports = Recept;
