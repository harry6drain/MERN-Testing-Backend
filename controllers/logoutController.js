const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// const { createAccessToken, createRefreshToken } = require("./createToken");

const logoutUser = async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.jwt) return res.sendStatus(204);
    const refreshToken = cookie.jwt;
    try {
        //get the user with the refresh token
        const user = await User.findOne({ refreshToken });
        if (!user) {
            throw Error("User already logged out!");
        }

        //FRONT-END: clear access token in the req headers

        //clear refresh token in db & cookie
        user.refreshToken = "";
        await user.save();

        res.clearCookie("jwt", {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,

        });
        res.status(200).json({ message: "User logged out successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = logoutUser;
