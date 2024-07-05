const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Country = sequelize.define('Country', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  country_code_two: DataTypes.STRING,
  country_code_three: DataTypes.STRING,
  mobile_code: DataTypes.INTEGER,
});

module.exports = Country;
