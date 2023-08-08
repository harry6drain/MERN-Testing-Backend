const validator = require("validator")

const validateUser = (email,password) => {
    if (!email || !password) {
        throw Error("All fields must be filled!")
    }
    if (!validator.isEmail(email)) {
        throw Error("Invalid Email!")
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough!")
    }
}

module.exports = validateUser