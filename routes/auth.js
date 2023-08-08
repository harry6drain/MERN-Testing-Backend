const express = require("express");
const loginUser = require("../controllers/loginController");
const signupUser = require("../controllers/signupController");
const handleRefreshToken = require("../controllers/refreshController");
const logoutUser = require("../controllers/logoutController")

const router = express.Router();

//login
router.post("/login", loginUser);

//signup
router.post("/signup", signupUser);

//refresh token
router.get("/refresh", handleRefreshToken);

//logout
router.get("/logout", logoutUser);

module.exports = router;
