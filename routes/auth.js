const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
try {
const user = new User(req.body);
await user.save();
res.send("User Registered");
} catch (err) {
res.send("Error");
}
});

// LOGIN
router.post("/login", async (req, res) => {
const user = await User.findOne({
email: req.body.email,
password: req.body.password
});

if (user) {
res.send("Login Success");
} else {
res.send("Invalid Credentials");
}
});

module.exports = router;
