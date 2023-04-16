const express = require("express");
const router = express.Router();

const form = `
    <form action="/product" method="POST">
        <input type="text" name="title"/>
        <button>Add Product</button>
    </form>
`;

router.get("/add-product", (req, res, next) => {
    res.send(form);
});

router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;
