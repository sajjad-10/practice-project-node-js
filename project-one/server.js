const express = require("express");
const app = express();

global.config = require("./config");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send("Hello Node");
});

app.listen(config.port, () => {
    console.log(`server is rerunning on port ${config.port}`);
});
