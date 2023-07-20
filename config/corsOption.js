var whitelist = 'http://13.59.254.124:4000'
var corsOptions = {
  origin: whitelist
  // function (origin, callback) {
  //   console.log('Origin:', origin);
  //   if (whitelist.indexOf(origin) !== -1 || !origin) {
  //     callback(null, true)
  //   } else {
  //     console.log("Not allowed by CORS")
  //     callback(new Error('Not allowed by CORS'))
  //   }
  // }
}

module.exports = corsOptions