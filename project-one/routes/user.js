const express = require("express");
const router = express.Router();

const { body, validationResult } = require("express-validator");

let users = require("./../users");

router.get("/", (req, res) => {
    // res.status(200).json({
    //     data: users,
    //     success: true,
    // });

    res.render("users", {
        pageName: "Users - all user",
        users,
        errors: req.flash("errors"),
        message: req.flash("message"),
    });
}); // see all user

router.get("/:id", (req, res) => {
    let user = users.find((user) => {
        if (user.id == req.params.id) {
            return user;
        }
    });
    res.render("user", { pageName: "User", user });
}); // see one user

router.post(
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
            req.flash("errors", errors.array());
            return res.redirect("/user");
        }

        console.log(req.body);
        req.body.id = parseInt(req.body.id); // convert string to number
        users.push(req.body);
        req.flash("message", "The new user was added.");
        return res.redirect("/user");
    }
); // add new user

router.put("/:id", (req, res) => {
    users = users.map((user) => {
        if (user.id == req.params.id) {
            return req.body;
        } else {
            return user;
        }
    });
    req.flash("message", "The user was update.");
    res.redirect("/user");
}); // update user

router.delete("/:id", (req, res) => {
    users = users.filter((user) => {
        if (user.id != req.params.id) {
            return users;
        }
    });
    req.flash("message", "The user was delete.");
    res.redirect("/user");
}); // delete user

module.exports = router;
