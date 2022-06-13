require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

// mongoose.connect(keys.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const routes = require("./main");
app.use(routes);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  const path = require("path");
  app.use(express.static(path.join(__dirname, "client/build")));

  // Express will serve up the index.html file
  // if it doesn't recognize the route

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
