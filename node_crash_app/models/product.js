const mongoConnect = require("../util/database").getDB;
class Product {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
    }
}

module.exports = Product;
