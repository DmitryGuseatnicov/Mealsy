const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const KitchenType = sequelize.define('kitchen_type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING },
});

module.exports = KitchenType;
