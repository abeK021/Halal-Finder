const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  googleGeoCodeKey: process.env.GOOGLE_API_KEY,
  port: process.env.PORT,
};
