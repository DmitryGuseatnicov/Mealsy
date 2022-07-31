const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Favorites = sequelize.define('favorites', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

module.exports = Favorites;
