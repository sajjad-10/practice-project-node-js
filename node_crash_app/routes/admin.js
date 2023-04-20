const path = require("path");

const express = require("express");
const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
    // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
    res.render("add-product", { pageTitle: "Add Product" });
});

router.post("/add-product", (req, res, next) => {
    const { title } = req.body;
    products.push({ title: title });
    res.redirect("/");
});

exports.routes = router;
exports.products = products;
