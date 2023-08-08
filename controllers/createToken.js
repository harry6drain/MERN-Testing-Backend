const jwt = require("jsonwebtoken");
require("dotenv").config();

const createAccessToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "0.5h",
    });
};

const createRefreshToken = (id) => {
    return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "1d",
    });
};

module.exports = {createAccessToken, createRefreshToken}