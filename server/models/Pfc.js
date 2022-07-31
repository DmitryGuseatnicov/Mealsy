const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Pfc = sequelize.define('pfc', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  proteins: { type: DataTypes.INTEGER, defaultValue: 0 },
  fats: { type: DataTypes.INTEGER, defaultValue: 0 },
  carbohydrates: { type: DataTypes.INTEGER, defaultValue: 0 },
  energyValue: { type: DataTypes.INTEGER, defaultValue: 0 },
});

module.exports = Pfc;
