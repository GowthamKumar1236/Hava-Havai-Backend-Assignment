const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const City = sequelize.define('City', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  country_id: DataTypes.INTEGER,
  is_active: DataTypes.BOOLEAN,
  lat: DataTypes.FLOAT,
  long: DataTypes.FLOAT,
});

module.exports = City;
