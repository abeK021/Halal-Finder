const mongoose = require('mongoose');

const { Schema } = mongoose;

const RestaurantsSchema = new Schema({
  name: String,
  location: {
    street: String,
    cityState: String,
    zip: Number,
    geo: {
      lat: Number,
      lng: Number,
    },
  },
  number: Number,
  website: String,
  type: String,
  description: String,
  imgUrl: String,
  orderUrl: String,
});

const Restaurants = mongoose.model('Restaurant', RestaurantsSchema);

module.exports = Restaurants;
