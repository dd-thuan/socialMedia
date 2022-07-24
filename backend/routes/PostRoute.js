const { Router } = require("express");
const express = require("express");
const { createPost, getAllPosts, getPost, updatePost, deletePost, likePost, getTimelinePosts } = require("../controllers/PostController");

const router = express.Router();

router.get('/posts', getAllPosts);
router.post('/create', createPost);
router.put('/:id/like', likePost);
router.get('/:id/timeline', getTimelinePosts);

router.route('/:id')
  .get(getPost)
  .delete(deletePost)
  .put(updatePost)
  .put(likePost);

module.exports = router