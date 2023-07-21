var whitelist = ["https://extrackerdemo.fun:4000", "http://13.59.254.124:4000/"];
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

module.exports = corsOptions;
