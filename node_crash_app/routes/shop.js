const path = require("path");

const express = require("express");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
    // console.log("Second Middleware");
    // res.send("<h2>Product List</h2>");
    console.log("shop", adminData.products);
    res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
