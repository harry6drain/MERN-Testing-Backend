var whitelist = ["https://extrackerdemo.fun", "http://13.59.254.124/"];
var corsOptions = {
    origin: whitelist
    // origin: function (origin, callback) {
    //     if (whitelist.indexOf(origin) !== -1) {
    //         callback(null, true);
    //     } else {
    //         callback(new Error("Not allowed by CORS"));
    //     }
    // },
};

module.exports = corsOptions;
