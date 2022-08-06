const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const ProductType = sequelize.define('product_type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  img: { type: DataTypes.STRING },
});

module.exports = ProductType;
