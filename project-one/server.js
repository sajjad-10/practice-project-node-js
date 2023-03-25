const express = require("express");
const app = express();
let users = require("./users");

global.config = require("./config");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.status(200).json({
        data: users,
        success: true,
    });
}); // see all user

app.get("/:id", (req, res) => {
    let user = users.filter((user) => {
        if (user.id == req.params.id) {
            return user;
        }
    });
    res.status(200).json({
        data: user,
        success: true,
    });
}); // see one user

app.listen(config.port, () => {
    console.log(`server is rerunning on port ${config.port}`);
});
