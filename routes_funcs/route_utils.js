// const dotenv = require("dotenv");
// dotenv.config();
const { Geocoder } = require("node-geocoder");
const NodeGeocoder = require("node-geocoder");
const { Client } = require("@googlemaps/google-maps-services-js");
const axios = require("axios");

const keys = require("../config/keys");
const { json } = require("express/lib/response");

const geocodeOptions = {
  provider: "google",
  apiKey: keys.GOOGLE_API_KEY,
};

const geocoder = NodeGeocoder(geocodeOptions);

// INITIAL LOAD------------------------------------------------
exports.getInitialRestaurants = async (req, res) => {
  const client = new Client({});

  const locationData = await axios.get(
    `https://extreme-ip-lookup.com/json/?key=${keys.EXTREME_IP_LOOKUP_KEY}`
  );

  let lat =
    Number(locationData.data.lat) || "no lat in extreme lookup api call";
  let lng =
    Number(locationData.data.lon) || "no lon in extreme lookup api call";

  // const {
  //   data: { results },
  // } = await
  client
    .placesNearby({
      params: {
        location: {
          lat,
          lng,
        },
        key: keys.GOOGLE_PLACES_API_KEY,
        radius: 8000,

        keyword: "halal",
      },
    })
    .then((r) => {
      res.json({
        test: "tesing initial load",
        restaurants: r.data.results,
        cityCoords: {
          lat,
          lng,
        },
        cityState: `${locationData.data.city}, ${locationData.data.region}`,
      });
    })
    .catch((e) => {
      console.log("api call err", e);
      res.json({
        test: "error testing",
        error: JSON.stringify(e),
      });
    });
};

//SEARCHED CITY--------------------------------------------------------------

exports.getSearchedCityRestaurants = async (req, res) => {
  const client = new Client({});

  const coords = await geocoder.geocode(`${req.query.city} ${req.query.state}`);

  let lat = coords[0].latitude;
  let lng = coords[0].longitude;

  const { data } = await client.placesNearby({
    params: {
      location: {
        lat,
        lng,
      },
      key: keys.GOOGLE_PLACES_API_KEY,
      radius: 8000,

      keyword: "halal",
    },
  });

  res
    .json({
      test: "testing searched city",
      restaurants: data.results,
      cityCoords: {
        lat,
        lng,
      },
      cityState: `${req.query.city}, ${req.query.state}`,
    })
    .end();
};

// CLICKED RESTUARANT
exports.getClickedRestaurant = async (req, res) => {
  const client = new Client({});

  const { data } = await client.placeDetails({
    params: {
      place_id: req.query.placeId,
      key: keys.GOOGLE_PLACES_API_KEY,
    },
  });

  res
    .json({
      test: "testing indivuadl restaruatn",
      restaurant: data.result,
    })
    .end();
};
