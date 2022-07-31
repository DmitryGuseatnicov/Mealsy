const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/database');

class User extends Model {}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    mail: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    sex: { type: DataTypes.STRING, defaultValue: '' },
    dataOfBirth: { type: DataTypes.STRING, defaultValue: '' },
    role: { type: DataTypes.STRING, defaultValue: 'user' },
  },
  {
    sequelize,
    modelName: 'user',
  }
);

module.exports = User;
