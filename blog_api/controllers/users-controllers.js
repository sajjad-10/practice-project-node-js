const { v4: uuidv4 } = require("uuid");

const users = [{ id: "u1", email: "test@gmail.com", password: "test" }];

const getUsers = (req, res, next) => {
    res.json({ users: users });
};
const singUp = (req, res, next) => {
    const { email, password } = req.body;
    const newUser = { id: uuidv4(), email, password };
    users.push(newUser);
    res.status(201).json({ user: newUser });
};
const login = (req, res, next) => {
    const { email, password } = req.body;
    const validUser = users.find((item) => {
        return item.email === email;
    });

    if (!validUser || validUser.password != password) {
        res.json({ massage: "User not valid." });
    }
    res.json({ massage: "Logged in." });
};

exports.getUsers = getUsers;
exports.singUp = singUp;
exports.login = login;
