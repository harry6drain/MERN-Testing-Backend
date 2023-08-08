const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {createAccessToken} = require("./createToken")

const handleRefreshToken = async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.jwt) return res.sendStatus(401);
    const refreshToken = cookie.jwt;
    const user = await User.findOne({ refreshToken }).exec();
    if (!user) return res.status(400).json({ error: "No user match!" });

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || user._id.toString() !== decoded.id) return res.sendStatus(403);
            const accessToken = createAccessToken(decoded.id);
            res.status(200).json({ accessToken });
        }
    );
};

module.exports = handleRefreshToken;
