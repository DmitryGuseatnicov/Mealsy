const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

module.exports = Product;
