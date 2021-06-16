const router = require('express').Router();
const Restaurants = require('../models/restuarants');

router.get('/add-restaurants', (req, res) => {
  const addRestaurant = new Restaurants({
    name: 'Nazara Indain Bistro',
    location: {
      street: '1945 High House Rd',
      cityState: 'Cary, NC',
      zip: 27519,
      geo: { lat: 35.792193019382786, lng: -78.84882074106366 },
    },
    number: 19196945353,
    website: 'http://www.nazaranc.com/',
    type: 'Indian',
    description:
      'Elegant dining space offering traditional Indian cuisine, with vegan options & a daily lunch buffet.',
  });

  addRestaurant.save((err, data) => console.log(err) || res.json(data).end());
});

router.delete('/delete', (req, res) => {
  Restaurants.deleteMany({});

  res.end('success');
});

router.get('/restaurants', async (req, res) => {
  const [docs, totalDocs] = await Promise.all([
    Restaurants.find({}),
    Restaurants.find({}).countDocuments(),
  ]);

  res.json([docs, totalDocs]);
});

module.exports = router;
