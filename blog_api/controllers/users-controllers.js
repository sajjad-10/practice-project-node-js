const { v4: uuidv4 } = require("uuid");

const User = require("../models/users");

const getUsers = (req, res, next) => {
    // res.json({ users: users });
};
const singUp = async (req, res, next) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ user: newUser });
};
const login = (req, res, next) => {
    // const { email, password } = req.body;
    // const validUser = users.find((item) => {
    //     return item.email === email;
    // });
    // if (!validUser || validUser.password != password) {
    //     res.json({ massage: "User not valid." });
    // }
    // res.json({ massage: "Logged in." });
};

exports.getUsers = getUsers;
exports.singUp = singUp;
exports.login = login;
