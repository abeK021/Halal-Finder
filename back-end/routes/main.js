const router = require('express').Router();
const { Geocoder } = require('node-geocoder');
const NodeGeocoder = require('node-geocoder');

const { googleGeoCodeKey } = require('../config/config');

const Restaurants = require('../models/restuarants');

const geocodeOptions = {
  provider: 'google',
  apiKey: 'API_KEY_HERE',
};

const geocoder = NodeGeocoder(geocodeOptions);

router.post('/add-restaurant', async (req, res) => {
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

router.delete('/delete', (req, res) => {
  Restaurants.deleteMany({});

  res.end('success');
});

router.get('/restaurants', async (req, res) => {
  const options = {
    pageNum: req.query.page || 1,
    pageLimit: 5,
    cityState: req.query.cityState || 'Cary NC',
    type: req.query.type || 'map',
  };

  const coordinates = await geocoder.geocode(`${options.cityState}`);

  const query = {
    cityState: { $regex: options.cityState, $options: 'i' },
  };

  if (options.type === 'list') {
    const [docs, totalDocs, cityCoordinates] = await Promise.all([
      Restaurants.find({ 'location.cityState': query.cityState })
        .skip(options.pageLimit * options.pageNum - options.pageLimit)
        .limit(options.pageLimit),

      Restaurants.find({
        'location.cityState': query.cityState,
      }).countDocuments(),
      { lat: coordinates[0].latitude, lng: coordinates[0].longitude },
    ]);

    const totalPages = Math.ceil(totalDocs / options.pageLimit);

    res.json({
      docs,
      totalDocs,
      totalPages,
      pageNumber: options.pageNum,
      cityCoordinates,
      cityState: options.cityState,
    });
  } else {
    const [docs, totalDocs, cityCoordinates] = await Promise.all([
      Restaurants.find({ 'location.cityState': query.cityState }),
      Restaurants.find({
        'location.cityState': query.cityState,
      }).countDocuments(),
      { lat: coordinates[0].latitude, lng: coordinates[0].longitude },
    ]);

    const totalPages = Math.ceil(totalDocs / options.pageLimit);

    res.json({
      docs,
      totalDocs,
      totalPages,
      pageNumber: options.pageNum,
      cityCoordinates,
      cityState: options.cityState,
      key: process.env,
    });
  }
});

module.exports = router;
