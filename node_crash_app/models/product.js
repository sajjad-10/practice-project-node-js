const mongodb = require("mongodb");
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
    static fetchAll() {
        const db = getDB();
        return db
            .collection("products")
            .find()
            .toArray()
            .then((products) => {
                console.log(products);
                return products;
            })
            .catch((err) => {
                console.log(err);
            });
    }
    static deleteById(pId) {
        const db = getDB();
        return db
            .collection("products")
            .deleteOne({ _id: new mongodb.ObjectId(pId) })
            .then((result) => {
                console.log("Deleted");
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = Product;
