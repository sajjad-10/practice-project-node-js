const express = require("express");
const app = express();

global.config = require("./config");

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.use("/user", require("./routes/user"));

app.listen(config.port, () => {
    console.log(`server is rerunning on port ${config.port}`);
});
