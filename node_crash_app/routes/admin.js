const path = require("path");

const express = require("express");
const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
    // res.send(form);
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
    const { title } = req.body;
    products.push({ title: title });
    res.redirect("/");
});

exports.routes = router;
exports.products = products;
