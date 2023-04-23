const express = require("express");

const router = express.Router();

const postsControllers = require("../controllers/posts-controllers");

router.get("/:pid", postsControllers.getPostById);
router.post("/", postsControllers.createPosts);

module.exports = router;
