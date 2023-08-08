const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const validateUser = require("../middleware/validateSignup");

// signup user
const signupUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        validateUser(email, password);
        const exists = await User.findOne({ email });

        if (exists) {
            throw Error("Email already in use!");
        }

        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hash });
        res.status(200).json({ email });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = signupUser;
