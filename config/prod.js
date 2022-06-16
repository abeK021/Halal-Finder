require("dotenv").config();
module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY,
  EXTREME_IP_LOOKUP_KEY: process.env.EXTREME_IP_LOOKUP_KEY,

  // MONGODB_URI: "mongodb://127.0.0.1/resteraunts",
  // GOOGLE_API_KEY: "AIzaSyDDZ5Inw8robmEARXPZ5zegTlCl2lCBJVg",
  // GOOGLE_PLACES_API_KEY: "AIzaSyDHodYPfHlFQmhCxoQkFXzPSVLR4XBbdRE",
  // EXTREME_IP_LOOKUP_KEY: "aDN4ReKjA1YM8bWQxbkD",
};
