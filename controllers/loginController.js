const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
require("dotenv").config();
const { createAccessToken, createRefreshToken } = require("./createToken");

const loginUser = async (req, res) => {
    //check if email exist in the database
    //if exists: check password match
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            throw Error("All fields must be filled!");
        }
        const user = await User.findOne({ email });
        if (!user) {
            throw Error("Incorrect Email");
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw Error("Incorrect Password");
        }
        const accessToken = createAccessToken(user._id);
        const refreshToken = createRefreshToken(user._id);
        user.refreshToken = refreshToken;
        const updatedUser = await user.save();
        // console.log(updatedUser)

        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.status(200).json({ accessToken });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = loginUser;
