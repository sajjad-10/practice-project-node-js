const express = require("express");
const app = express();

global.config = require("./config");

app.use(express.static(__dirname + "/public"));

// send data white url -query-
app.get("/", (req, res) => {
    res.send(`Hello Node :${req.query.username}`);
}); // in url: /?id=10&username=sajjad

// send data white url -params-
app.get("/:username", (req, res) => {
    res.send(`Hello Node :${req.params.username}`);
}); // in url: /:sajjad

app.listen(config.port, () => {
    console.log(`server is rerunning on port ${config.port}`);
});
