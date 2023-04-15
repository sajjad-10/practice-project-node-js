const express = require("express");
const app = express();

app.use("/add-product", (req, res, next) => {
    res.send("<h2>Add Product</h2>");
});

app.use("/", (req, res, next) => {
    console.log("Second Middleware");
    res.send("<h2>Product List</h2>");
});

app.listen(8000);
