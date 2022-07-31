const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');

class Product extends Model {}

Product.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.INTEGER },
  },
  {
    sequelize,
    modelName: 'product',
  }
);

module.exports = Product;
