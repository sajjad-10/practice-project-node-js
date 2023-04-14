// const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("First Middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Second Middleware");
});

// const server = http.createServer(app);
// server.listen(8000);
app.listen(8000); // comment code blow for create a server but in express jus use --> app.listen(8000);
