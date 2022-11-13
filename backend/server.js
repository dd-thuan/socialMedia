const app = require("./app");
const cloudinary = require("cloudinary");


const dotenv = require("dotenv");

// Config
if(process.env.NODE_ENV != "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`"server is working on http://localhost:${process.env.PORT}`);
});

