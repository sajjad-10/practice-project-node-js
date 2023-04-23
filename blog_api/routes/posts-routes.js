const express = require("express");

const router = express.Router();

const postsControllers = require("../controllers/posts-controllers");

router.get("/:pid", postsControllers.getPostById);

module.exports = router;
