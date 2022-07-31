const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');

class Pfc extends Model {}

Pfc.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    proteins: { type: DataTypes.INTEGER, defaultValue: '' },
    fats: { type: DataTypes.INTEGER, defaultValue: '' },
    carbohydrates: { type: DataTypes.INTEGER, defaultValue: '' },
    energyValue: { type: DataTypes.INTEGER, defaultValue: '' },
  },
  {
    sequelize,
    modelName: 'pfc',
  }
);

module.exports = Pfc;
