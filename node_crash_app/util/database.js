const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017/node_crash_app";

const mongoConnect = (callback) => {
    MongoClient.connect(uri)
        .then((result) => {
            console.log("Connected");
            callback(result);
        })
        .catch((err) => console.log(err));
};

module.exports = mongoConnect;
