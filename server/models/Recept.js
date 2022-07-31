const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Recept = sequelize.define('recept', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descriptions: { type: DataTypes.INTEGER },
});

module.exports = Recept;
