const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const ReceptKitchenType = sequelize.define('recept_kitchen_type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

module.exports = ReceptKitchenType;
