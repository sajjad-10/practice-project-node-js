const express = require("express");
const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({ extended: false }));

app.use(adminRoutes)
app.use(shopRoutes)


app.listen(8000);
