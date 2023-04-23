const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("add-product", {
        pageTitle: "Add Product",
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then((products) => {
            res.render("shop", { pageTitle: "Shop", products: products });
        })
        .catch((err) => {});
};

exports.deleteProduct = (req, res, next) => {
    const pId = req.body.productId;
    Product.deleteById(pId)
        .then((result) => {
            console.log("Product Deleted");
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });
};
