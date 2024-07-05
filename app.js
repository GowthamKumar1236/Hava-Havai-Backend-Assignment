const express = require('express');
const sequelize = require('./database');
const Airport = require('./models/Airport');
const City = require('./models/City');
const Country = require('./models/Country');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Hava Havai API'); // Example response for the root path
});

app.get('/airport', async (req, res) => {
  const { iata_code } = req.query;

  try {
    const airport = await Airport.findOne({
      where: { iata_code },
      include: [
        {
          model: City,
          include: {
            model: Country,
            attributes: ['id', 'name', 'country_code_two', 'country_code_three', 'mobile_code'],
          },
          attributes: ['id', 'name', 'country_id', 'is_active', 'lat', 'long'],
        },
        {
          model: Country,
          attributes: ['id', 'name', 'country_code_two', 'country_code_three', 'mobile_code'],
        },
      ],
    });

    if (!airport) {
      return res.status(404).json({ message: 'Airport not found.' });
    }

    // Format response
    const response = {
      airport: {
        id: airport.id,
        icao_code: airport.icao_code,
        iata_code: airport.iata_code,
        name: airport.name,
        type: airport.type,
        latitude_deg: airport.latitude_deg,
        longitude_deg: airport.longitude_deg,
        elevation_ft: airport.elevation_ft,
        address: {
          city: airport.City || null, // Handle case where city might not exist
          country: airport.Country || null, // Handle case where country might not exist
        },
      },
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching airport:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
