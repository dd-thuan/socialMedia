const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const { error } = require("console");


app.use(bodyParser.json({ limit: "30mb", extened: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

dotenv.config({path:"backend/config/config.env"});


mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((data) => console.log(`MongoDb connected with server ${data.connection.host}`)).catch((error) => console.log(error));

module.exports = app;
