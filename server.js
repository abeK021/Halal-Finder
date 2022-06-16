// require("dotenv").config();

const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router");
const path = require("path");

// mongoose.connect(keys.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router(app);

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static("./client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT);
console.log("Server Listening on:", PORT);
