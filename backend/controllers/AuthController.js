const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");

exports.registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const duplicate = await UserModel.findOne({ email })
    if (duplicate) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({
      email: user.email,
      id: user._id,
    }, process.env.JWT_KEY, { expiresIn: "1h" })

    res.status(200).json({
      success: true,
      user,
      token
    });
    console.log(user);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


exports.loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await UserModel.findOne({ email: email });

    if (user) {
      const comparePassword = await bcrypt.compare(password, user.password);

      if (!comparePassword) {
        res.status(400).json({ message: 'Invalid password' });
      } else {
        const token = jwt.sign({
          email: user.email,
          id: user._id,
        }, process.env.JWT_KEY, { expiresIn: "1h" })
        res.status(200).json({ user, token });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Logout User
exports.logoutUser = async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true.valueOf,
  });

  res.status(200).json({
    sucess: true,
    message: "Logged Out",
  });
}