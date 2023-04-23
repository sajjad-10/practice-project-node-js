const express = require("express");

const postRoutes = require("./routes/posts-routes");
const usersRoutes = require("./routes/users-routes");

const app = express();

app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/users", usersRoutes);

app.listen(5000);
