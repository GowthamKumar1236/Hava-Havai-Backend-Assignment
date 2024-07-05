// database.js
const {
  Sequelize
} = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  // Path to your SQLite database file
  logging: false
});
module.exports = sequelize;