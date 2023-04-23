const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const postsControllers = require("../controllers/posts-controllers");

router.get("/:pid", postsControllers.getPostById);
router.post(
    "/",
    [check("title").not().isEmpty(), check("content").isLength({ min: 5 })],
    postsControllers.createPosts
);
router.delete("/:pid", postsControllers.deletePost);

module.exports = router;
