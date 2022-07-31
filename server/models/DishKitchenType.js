const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const DishKitchenType = sequelize.define('dish_kitchen_type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

module.exports = DishKitchenType;
