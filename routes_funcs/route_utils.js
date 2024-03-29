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

  var ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  const locationData = await axios.get(
    `https://extreme-ip-lookup.com/json/${ip}?key=${keys.EXTREME_IP_LOOKUP_KEY}`
  );

  let lat = Number(locationData.data.lat) || 40.7237;
  let lng = Number(locationData.data.lon) || -73.9898;
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

  const coords = await geocoder.geocode(`${req.query.city_state} `);

  if (coords.length) {
    let lat = coords[0].latitude;
    let lng = coords[0].longitude;

    let location = coords[0].formattedAddress;

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
        cityState: location,
      })
      .end();
  } else {
    res.json({
      err: true,
      message: "Sorry no results. Try searching for an established city",
    });
  }
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

exports.testGetIp = (req, res) => {
  var ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  axios
    .get(
      `https://extreme-ip-lookup.com/json/${ip}?key=${keys.EXTREME_IP_LOOKUP_KEY}`
    )
    .then((r) => {
      res
        .json({
          results: r.data || ip,
          key: keys.EXTREME_IP_LOOKUP_KEY,
          ip,
        })
        .end();
    })
    .catch((e) => {
      res
        .json({
          err: e,
          key: keys.EXTREME_IP_LOOKUP_KEY,
          ip,
        })
        .end();
    });
};
