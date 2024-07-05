Overview
The Hava Havai Backend project provides APIs to retrieve detailed information about airports, including their associated city and country details. It uses SQLite as the database backend and Sequelize as the ORM for interacting with the database.

Setup
To set up this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/hava-havai-backend.git
cd hava-havai-backend
Install dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory with the following environment variables:

plaintext
Copy code
PORT=3000
Run the project:

bash
Copy code
npm start
This will start the server at http://localhost:3000.

Database Structure
The SQLite database consists of three main tables:

Airport
City
Country
Each table has specific fields to store information related to airports, cities, and countries.

API Endpoints
GET /airport
Retrieves airport details based on the iata_code query parameter.

Example Request:
http
Copy code
GET /airport?iata_code=AGR
Example Response:
json
Copy code
{
  "airport": {
    "id": 145,
    "icao_code": "VIAG",
    "iata_code": "AGR",
    "name": "Agra Airport / Agra Air Force Station",
    "type": "medium_airport",
    "latitude_deg": 27.157683,
    "longitude_deg": 77.960942,
    "elevation_ft": 551,
    "address": {
      "city": {
        "id": 436,
        "name": "Agra",
        "country_id": 76,
        "is_active": true,
        "lat": 27.18,
        "long": 78.02
      },
      "country": {
        "id": 76,
        "name": "India",
        "country_code_two": "IN",
        "country_code_three": "IND",
        "mobile_code": 91,
        "continent_id": 1
      }
    }
  }
}
Deployment
The project can be deployed to platforms like Render by following these steps:

Prepare your project:
Ensure your project is ready for deployment by setting up environment variables and configuring any necessary deployment settings.

Create a Render account:
Sign up for a Render account if you haven't already.

Deploy using Render:

Create a new web service on Render.
Connect your GitHub repository and specify the build command (npm run build) and start command (npm start).
Render will automatically deploy your application and provide a URL to access it.
Usage
Fetching Airport Data: Use the /airport endpoint with the iata_code parameter to retrieve detailed information about airports.
