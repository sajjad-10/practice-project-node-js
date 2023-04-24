const bcrypt = require("bcryptjs");

const User = require("../models/users");

const getUsers = async (req, res, next) => {
    const users = await User.find();
    res.json({ users: users });
};
const singUp = async (req, res, next) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ user: newUser });
};
const login = async (req, res, next) => {
    const { email, password } = req.body;
    const validUser = await User.findOne({ email: email });
    if (!validUser) {
        res.json({ message: "User is not valid." });
    }
    const validPassword = await bcrypt.compare(password, validUser.password);
    console.log(validPassword);
    if (!validPassword) {
        res.json({
            message: "Password is not valid.",
        });
    }
    res.json({ massage: "Logged in." });
};

exports.getUsers = getUsers;
exports.singUp = singUp;
exports.login = login;
