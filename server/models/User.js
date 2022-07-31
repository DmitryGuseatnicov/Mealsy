const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  mail: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  sex: { type: DataTypes.STRING, defaultValue: '' },
  dataOfBirth: { type: DataTypes.STRING, defaultValue: '' },
  role: { type: DataTypes.STRING, defaultValue: 'user' },
});

module.exports = User;
