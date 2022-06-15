const dotenv = require("dotenv");
dotenv.config();
const { Geocoder } = require("node-geocoder");
const NodeGeocoder = require("node-geocoder");
const { Client } = require("@googlemaps/google-maps-services-js");
const axios = require("axios");

const keys = require("../config/keys");

const geocodeOptions = {
  provider: "google",
  apiKey: keys.GOOGLE_API_KEY,
};

const geocoder = NodeGeocoder(geocodeOptions);

// INITIAL LOAD------------------------------------------------
exports.getInitialRestaurants = async (req, res) => {
  const client = new Client({});

  const { data } = await axios.get(
    `https://extreme-ip-lookup.com/json/?key=${process.env.EXTREME_IP_LOOKUP_KEY}`
  );
  console.log("location", data);
  let lat = Number(data.lat);
  let lng = Number(data.lon);

  const {
    data: { results },
  } = await client
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
    .then((r) => console.log("succes", r))
    .catch((e) => console.log("api call err", e));
  console.log(process.env.GOOGLE_PLACES_API_KEY);
  res.json({
    test: "tesing initial load",
    restaurants: results,
    cityCoords: {
      lat,
      lng,
    },
    cityState: `${data.city}, ${data.region}`,
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
