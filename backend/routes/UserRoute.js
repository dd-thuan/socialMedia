const express = require("express");
const {  getUser, getAllUsers, updateUser, deleteUser, followUser, unFollowUser } = require("../controllers/UserController");
const router = express.Router();

router.get("/:id", getUser)
router.get("/", getAllUsers)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.put("/:id/follow", followUser)
router.put("/:id/unfollow", unFollowUser)


module.exports = router