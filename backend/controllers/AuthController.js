const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    email,
    password: hashedPassword,
    firstname,
    lastname
  })

  try {
    await newUser.save()
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

exports.login = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await UserModel.findOne({email: email});

    if(user)
    {
      const comparePassword = await bcrypt.compare(password, user.password);
      comparePassword ? res.status(200).json(user) : res.status(400).json("Password wrong ")
    } else {
      res.status(404).json("User does not exist")
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}