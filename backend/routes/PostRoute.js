const express = require("express");
const { createPost, getAllPosts, getPost, updatePost, deletePost, likePost, getTimelinePosts } = require("../controllers/PostController");

const router = express.Router();

router.get('/posts', getAllPosts);
router.post('/', createPost);
router.put('/:id/like', likePost);
router.get('/:id/timeline', getTimelinePosts);

router.route('/:id')
  .get(getPost)
  .delete(deletePost)
  .put(updatePost);

module.exports = router