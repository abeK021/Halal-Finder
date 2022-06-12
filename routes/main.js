const dotenv = require("dotenv");
dotenv.config();
const router = require("express").Router();
const { Geocoder } = require("node-geocoder");
const NodeGeocoder = require("node-geocoder");
const { Client } = require("@googlemaps/google-maps-services-js");

const Restaurants = require("../models/restuarants");

const keys = require("../config/keys");

const geocodeOptions = {
  provider: "google",
  apiKey: keys.GOOGLE_API_KEY,
};

const geocoder = NodeGeocoder(geocodeOptions);

// GET RESTAURANTS
router.get("/restaurants", async (req, res) => {
  const client = new Client({});

  const coordinates = await geocoder.geocode(
    `${req.query.city} ${req.query.state}`
  );

  let lat = coordinates[0].latitude;
  let lng = coordinates[0].longitude;

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
    .then((r, e) => {
      res.json({
        restaurants: r.data.results,
        cityCoords: {
          lat,
          lng,
        },
        cityState: `${req.query.city}, ${req.query.state}`,
      });
    })
    .catch((e) => {
      res.json(e);
    });
});

// GET RESTAURANT INFO
router.get("/restaurant", async (req, res) => {
  const client = new Client({});

  client
    .placeDetails({
      params: {
        place_id: req.query.placeId,
        key: "AIzaSyDHodYPfHlFQmhCxoQkFXzPSVLR4XBbdRE",
      },
    })
    .then(({ data: { result } }) => {
      res.json(result).end();
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/add-restaurant", async (req, res) => {
  const coordinates = await geocoder.geocode(
    `${req.body.data.streetAddress} ${req.body.data.cityName} ${req.body.data.state} ${req.body.data.zipcode}`
  );

  const addRestaurant = new Restaurants({
    name: req.body.data.restaurantName,
    location: {
      street: req.body.data.streetAddress,
      cityState: `${req.body.data.cityName} ${req.body.data.state}`,
      zip: Number(req.body.data.zipCode),
      geo: { lat: coordinates[0].latitude, lng: coordinates[0].longitude },
    },
    number: Number(req.body.data.number),
    website: req.body.data.website,
    type: req.body.data.type,
    description: req.body.data.description,
    imgUrl: req.body.data.imgUrl,
    orderUrl: req.body.data.orderUrl,
  });

  addRestaurant.save((err, data) => console.log(err) || res.json(data).end());
});

router.delete("/delete", (req, res) => {
  Restaurants.deleteMany({});

  res.end("success");
});

module.exports = router;
