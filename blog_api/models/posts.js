const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, require: true },
    content: { type: String, require: true },
});

module.exports = mongoose.model("Post", postSchema);
