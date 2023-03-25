const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");

let users = require("./users");

global.config = require("./config");

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.status(200).json({
        data: users,
        success: true,
    });
}); // see all user

app.get("/:id", (req, res) => {
    let user = users.filter((user) => {
        if (user.id == req.params.id) {
            return user;
        }
    });
    res.status(200).json({
        data: user,
        success: true,
    });
}); // see one user

app.post(
    "/", // username must be an email
    body("email", "The email format is not correct.").isEmail(),
    // password must be at least 5 chars long
    body(
        "password",
        "The password length should be more than 2 characters."
    ).isLength({ min: 5 }),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        console.log(req.body);
        req.body.id = parseInt(req.body.id); // convert string to number
        users.push(req.body);
        res.json({
            data: "The new user was added.",
            success: true,
        });
    }
); // add new user

app.put("/:id", (req, res) => {
    users = users.map((user) => {
        if (user.id == req.params.id) {
            return req.body;
        } else {
            return user;
        }
    });
    res.json({
        data: "The user was update.",
        success: true,
    });

}); // update user

app.delete('/:id',(req,res)=>{
    users = users.filter((user)=>{
        if (user.id != req.params.id) {
            return users
        }
    })
    res.json({
        data: "The user was delete.",
        success: true,
    });

}) // delete user

app.listen(config.port, () => {
    console.log(`server is rerunning on port ${config.port}`);
});
