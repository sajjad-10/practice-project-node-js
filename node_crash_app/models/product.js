const fs = require("fs");
const path = require("path");
module.exports = class Product {
    constructor(title) {
        this.title = title;
    }
    save() {
        const filePath = path.join(
            path.dirname(require.main.filename),
            "data",
            "products.json"
        );
        fs.readFile(filePath, (err, data) => {
            let products = [];
            if (!err) {
                products = JSON.parse(data);
            }

            products.push(this);

            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }
    static fetchAll() {
        return products;
    }
};
