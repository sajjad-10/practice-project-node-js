const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

router.get("/", productsController.getProducts);
router.post("/", productsController.deleteProduct);

module.exports = router;
