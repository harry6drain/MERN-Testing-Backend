const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        return res.sendStatus(401);
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.user = decoded.id;
    });
    next();
};

module.exports = verifyJWT;
