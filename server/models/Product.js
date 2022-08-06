const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  img: { type: DataTypes.STRING, defaultValue: '' },
  description: { type: DataTypes.STRING, defaultValue: '' },
});

module.exports = Product;
