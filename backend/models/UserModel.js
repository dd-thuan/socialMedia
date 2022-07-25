const mongoose = require("mongoose");
const validator = require("validator");


const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter your email"],
      validate: [validator.isEmail, "Invalid email"],
    },
    password: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    imageProfile: String,
    imageCover: String,
    about: String,
    livesIn: String,
    worksAt: String,
    relationship: String,
    followers: [],
    following: []
  },
  { timestamps: true }
)

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel
