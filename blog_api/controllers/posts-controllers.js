const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

let posts = [
    { id: "p1", title: "Title", content: "Content" },
    { id: "p2", title: "Title", content: "Content" },
];

const getPostById = (req, res, next) => {
    const postId = req.params.pid;
    const post = posts.find((item) => {
        return item.id === postId;
    });
    res.json({ post: post });
};

const createPosts = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(402).json({ message: "Invalid data." });
    }

    const { title, content } = req.body;
    const createdPost = { id: uuidv4(), title: title, content: content };
    posts.push(createdPost);
    res.status(201).json({ post: createdPost });
};

const deletePost = (req, res, next) => {
    const postId = req.params.pid;
    posts.filter((item) => {
        return item.id !== postId;
    });
    res.status(200).json({ message: "Post Deleted" });
};

exports.getPostById = getPostById;
exports.createPosts = createPosts;
exports.deletePost = deletePost;
