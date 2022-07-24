const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const authRoute = require("./routes/AuthRoute");
const userRoute = require("./routes/UserRoute");
const postRoute = require("./routes/PostRoute");

// routes



// middleware
app.use(bodyParser.json({ limit: "30mb", extened: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

dotenv.config({path:"backend/config/config.env"});


mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then((data) => console.log(`MongoDb connected with server ${data.connection.host}`)).catch((error) => console.log(error));

// usage of route
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/post", postRoute);



app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

module.exports = app;
  