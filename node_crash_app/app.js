const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        const form = `
            <form method="POST" action="/products">
                <input type="text" name="product" />
                <button type="submit" name="product">Add Product</button>
            </form>
        `;
        res.write(form);
        return res.end;
    }

    if ((url === "/products", method === "POST")) {
        fs.writeFileSync("products.txt", "Something");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }

    res.setHeader("Content-Type", "text/html");
    const title = `<h2>Shop Page</h2>`;
    res.write(title);
    res.end();
});

server.listen(8001);
