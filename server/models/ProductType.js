const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');

class ProductType extends Model {}

ProductType.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: 'product_type',
  }
);

module.exports = ProductType;
