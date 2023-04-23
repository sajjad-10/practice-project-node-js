const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017/node_crash_app";

let db;

const mongoConnect = (callback) => {
    MongoClient.connect(uri)
        .then((client) => {
            console.log("Connected");
            db = client.db();
            callback();
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const getDB = () => {
    if (db) {
        return db;
    }
    throw "No DB Found";
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
