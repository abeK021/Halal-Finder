const router = require("express").Router();

const routes = require("./routes_funcs/route_utils");

// get Initial restaurants
router.get("/", routes.getInitialRestaurants);

// get serached city restaurants
router.get("/restaurants", routes.getSearchedCityRestaurants);

// clicked resturant
router.get("/restaurant", routes.getClickedRestaurant);

// router.post("/add-restaurant", async (req, res) => {
//   const coordinates = await geocoder.geocode(
//     `${req.body.data.streetAddress} ${req.body.data.cityName} ${req.body.data.state} ${req.body.data.zipcode}`
//   );

//   const addRestaurant = new Restaurants({
//     name: req.body.data.restaurantName,
//     location: {
//       street: req.body.data.streetAddress,
//       cityState: `${req.body.data.cityName} ${req.body.data.state}`,
//       zip: Number(req.body.data.zipCode),
//       geo: { lat: coordinates[0].latitude, lng: coordinates[0].longitude },
//     },
//     number: Number(req.body.data.number),
//     website: req.body.data.website,
//     type: req.body.data.type,
//     description: req.body.data.description,
//     imgUrl: req.body.data.imgUrl,
//     orderUrl: req.body.data.orderUrl,
//   });

//   addRestaurant.save((err, data) => console.log(err) || res.json(data).end());
// });

// router.delete("/delete", (req, res) => {
//   Restaurants.deleteMany({});

//   res.end("success");
// });

module.exports = router;
