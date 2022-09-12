const User = require("../models/UserModel");
const bcrypt = require("bcrypt");



exports.getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc
      res.status(200).json(otherDetails)
    } else {
      res.status(404).json("Not found")
    }
  } catch (error) {
    res.status(500).json(error)

  }
}

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    users.map((user) => {
      const { password, ...otherDetails } = user._doc
      return otherDetails
    })
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error)

  }
}


exports.updateUser = async (req, res) => {
  const id = req.params.id
  const { _id, currentUserStatus, password } = req.body
  if (id === _id) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }

      const user = await User.findByIdAndUpdate(id, req.body, {
        new: true,
        useFindAndModify: false
      })

      // const token = jwt.sign({
      //   email: user.email,
      //   id: user._id,
      // }, process.env.JWT_KEY, { expiresIn: "1h" })
      // console.log({user, token})
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("Access denied")
  }
}



exports.deleteUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId, currentUserStatus } = req.body;

  if (currentUserId == id || currentUserStatus) {
    try {
      await User.findByIdAndDelete(id);
      res.status(200).json("User deleted successfully")

    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("Access denied")
  }
}

exports.followUser = async (req, res) => {
  const id = req.params.id

  const { _id } = req.body

  if (_id == id) {
    res.status(403).json("Action forbidden")
  } else {
    try {
      const followUser = await User.findById(id)
      const followingUser = await User.findById(_id)

      if (!followUser.followers.includes(_id)) {
        await followUser.updateOne({ $push: { followers: _id } })
        await followingUser.updateOne({ $push: { following: id } })
        res.status(200).json("User followed")
      } else {
        res.status(403).json("User is already followed")
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

exports.unFollowUser = async (req, res) => {
  const id = req.params.id

  const { _id } = req.body

  if (_id === id) {
    res.status(403).json("Action forbidden")

  }
  try {
    const unFollowUser = await User.findById(id)
    const unFollowingUser = await User.findById(_id)

    if (unFollowUser.followers.includes(_id)) {
      await unFollowUser.updateOne({ $pull: { followers: _id } })
      await unFollowingUser.updateOne({ $pull: { following: id } })
      res.status(200).json("User unfollowed")
    } else {
      res.status(403).json("User is already unfollowed")
    }
  } catch (error) {
    res.status(500).json(error)
  }
}