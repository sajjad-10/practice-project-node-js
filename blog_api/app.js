const express = require("express");

const postRoutes = require("./routes/posts-routes");

const app = express();

app.use(express.json())
app.use("/api/posts", postRoutes);

app.listen(5000);
