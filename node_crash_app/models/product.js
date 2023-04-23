const getDB = require("../util/database").getDB;
class Product {
    constructor(title) {
        this.title = title;
    }
    save() {
        const db = getDB();
        return db
            .collection("products")
            .insertOne(this)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = Product;
