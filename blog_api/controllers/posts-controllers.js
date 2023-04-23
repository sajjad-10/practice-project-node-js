const { v4: uuidv4 } = require("uuid");

const posts = [
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
    const { title, content } = req.body;
    const createdPost = { id: uuidv4(), title: title, content: content };
    posts.push(createdPost);
    res.status(201).json({ post: createdPost });
};

exports.getPostById = getPostById;
exports.createPosts = createPosts;
