const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

    const token = jwt.sign({ email: newUser.email }, "secret_key"); // secret_key: not sherd ane were

    res.status(201).json({ user: newUser, token });
};
const login = async (req, res, next) => {
    const { email, password } = req.body;
    const validUser = await User.findOne({ email: email });
    if (!validUser) {
        res.json({ message: "User is not valid." });
    }
    const validPassword = await bcrypt.compare(password, validUser.password);
    if (!validPassword) {
        res.json({
            message: "Password is not valid.",
        });
    }

    const token = jwt.sign({ email: validUser.email }, "secret_key"); // secret_key: not sherd ane were

    res.json({ token });
};

exports.getUsers = getUsers;
exports.singUp = singUp;
exports.login = login;
