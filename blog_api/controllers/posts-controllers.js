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

exports.getPostById = getPostById;
