// require("dotenv").config();

const axios = require("axios");
const keys = require("./config/keys");

const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router");

// const routes = require("./router");

const routes = require("./routes_funcs/route_utils");
const { application } = require("express");
const res = require("express/lib/response");

// mongoose.connect(keys.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(router);

app.get("/home", routes.getInitialRestaurants);

// get serached city restaurants
app.get("/restaurants", routes.getSearchedCityRestaurants);

// clicked resturant
app.get("/restaurant", routes.getClickedRestaurant);

app.get("/test-location", async () => {
  const locationData = await axios.get(
    `https://extreme-ip-lookup.com/json/?key=${keys.EXTREME_IP_LOOKUP_KEY}`
  );

  res.json({
    locationData,
  });
});

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  // app.use(express.static("./client/build"));
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT);
console.log("Server Listening on:", PORT);
