const express = require("express");
const app = express();
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");

require('dotenv').config()

global.config = require("./config");

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(methodOverride("methodd"));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    })
);

app.use(flash());

app.get("/", (req, res) => {
    res.render("index");
});
app.use("/user", require("./routes/user"));

app.listen(config.port, () => {
    console.log(`server is rerunning on port ${config.port}`);
});
