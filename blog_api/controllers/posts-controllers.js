const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

const Post = require("../models/posts");

const getPostById = async (req, res, next) => {
    const postId = req.params.pid;
    const post = await Post.findById(postId);
    res.json({ post: post });
};

const createPosts = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(402).json({ message: "Invalid data." });
    }

    const { title, content } = req.body;
    const createdPost = new Post({ title, content });
    await createdPost.save();
    res.status(201).json({ post: createdPost });
};

const deletePost = async (req, res, next) => {
    const postId = req.params.pid;
    const post = await Post.findById(postId);
    await post.remove();
    res.status(200).json({ message: "Post Deleted" });
};

exports.getPostById = getPostById;
exports.createPosts = createPosts;
exports.deletePost = deletePost;
