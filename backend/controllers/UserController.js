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
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error)

  }

}

exports.updateUser = async (req, res) => {
  const id = req.params.id
  const { currentUserId, currentUserStatus, password } = req.body
  if (id === currentUserId || currentUserStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true
      })

      res.status(200).json(user)
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

  if (currentUserId === id || currentUserStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
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

  const { currentUserId } = req.body

  if (currentUserId === id) {
    res.status(403).json("Action forbidden")
  } else {
    try {
      const followUser = await User.findById(id)
      const followingUser = await User.findById(currentUserId)

      if (!followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $push: { followers: currentUserId } })
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

  const { currentUserId } = req.body

  if (currentUserId === id) {
    res.status(403).json("Action forbidden")
  } else {
    try {
      const followUser = await UserModel.findById(id)
      const followingUser = await UserModel.findById(currentUserId)

      if (followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $pull: { followers: currentUserId } })
        await followingUser.updateOne({ $pull: { following: id } })
        res.status(200).json("User unfollowed")
      } else {
        res.status(403).json("User is already unfollowed")
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }
}