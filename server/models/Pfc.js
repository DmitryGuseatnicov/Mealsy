const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Pfc = sequelize.define('pfc', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  proteins: { type: DataTypes.INTEGER, defaultValue: '' },
  fats: { type: DataTypes.INTEGER, defaultValue: '' },
  carbohydrates: { type: DataTypes.INTEGER, defaultValue: '' },
  energyValue: { type: DataTypes.INTEGER, defaultValue: '' },
});

module.exports = Pfc;
