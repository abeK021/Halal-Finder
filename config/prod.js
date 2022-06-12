require("dotenv").config();
module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY,
};
