const express = require("express");
const { registerUser, login } = require("../controllers/UserController");
const router = express.Router();



module.exports = router