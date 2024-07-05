const sequelize = require('./database');
const Airport = require('./models/Airport');
const City = require('./models/City');
const Country = require('./models/Country');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Defining relationships
    Airport.belongsTo(City);
    Airport.belongsTo(Country);
    City.belongsTo(Country);

    // Syncing all models
    await sequelize.sync({ force: true }); 

    console.log('All models were synchronized successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
})();
