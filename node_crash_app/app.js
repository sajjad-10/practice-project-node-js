const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

const form = `
    <form action="/product" method="POST">
        <input type="text" name="title"/>
        <button>Add Product</button>
    </form>
`;

app.use("/add-product", (req, res, next) => {
    res.send(form);
});

app.use("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    console.log("Second Middleware");
    res.send("<h2>Product List</h2>");
});

app.listen(8000);
