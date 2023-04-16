const express = require("express");
const router = express.Router()

router.use("/", (req, res, next) => {
    console.log("Second Middleware");
    res.send("<h2>Product List</h2>");
});

module.exports = router