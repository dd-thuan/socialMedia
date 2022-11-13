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
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    username: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    },

    imageProfile: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
        default: "https://res.cloudinary.com/dhnhufybl/image/upload/v1668342668/avatars/149071_cskpbk.png"
      },
    },

    imageCover: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
        default: "https://res.cloudinary.com/dhnhufybl/image/upload/v1668342864/avatars/1920x1080-gray-solid-color-background_bgtlbz.jpg"
      },
    },



    about: String,
    livesIn: String,
    worksAt: String,
    relationship: String,
    country: String,
    followers: [],
    following: []
  },
  { timestamps: true }
)

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel
