const Post = require('../models/PostModel');
const User = require("../models/UserModel");
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');

exports.createPost = async (req, res) => {
  try {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
      folder: "posts",
    });

    const { desc, userId, } = req.body;

    const post = await Post.create({
      desc,
      userId,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });
    res.status(201).json({
      success: true,
      post,
    });
    console.log(post);

  } catch (err) {
    console.error(err);
  }


}

exports.getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);

    res.status(200).json(post)

  } catch (error) {
    res.status(500).json(error)

  }
}


exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error)

  }
}

exports.updatePost = async (req, res) => {

  const post = await Post.findById(id);
  try {
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body })
      res.status(200).json({
        message: 'Post updated successfully.', post
      })
    } else {
      res.status(403).json({ message: 'Action forbidden' })
    }

  } catch (err) {
    res.status(500).json({ message: err });
  }
}


exports.deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await Post.findById(id);

    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post deleted successfully");
    } else {
      res.status(403).json({ message: 'Action forbidden' });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

exports.likePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await Post.findById(id);

    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked successfully");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post unlike successfully");
    }

  } catch (err) {
    res.status(500).json({ message: err });
  }

}

exports.getTimelinePosts = async (req, res) => {
  const userId = req.params.id;

  try {
    const currentUserPosts = await Post.find({ userId: userId });
    const followingPosts = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    res
      .status(200)
      .json(currentUserPosts.concat(...followingPosts[0].followingPosts)
        .sort((a, b) => {
          return b.createdAt - a.createdAt;
        }));

  } catch (err) {
    return res.status(500).json({ message: err });
  }
}