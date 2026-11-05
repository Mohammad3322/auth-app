const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    // ( || !origin) for postman testin; we will delete it before upload the project to production
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

  // to recieve the cookies:
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
