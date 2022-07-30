const rateLimit = require('express-rate-limit');
const { messageErrors } = require('../utils/constants');

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  legacyHeaders: false,
  message: messageErrors.limiterError,
});

module.exports = limiter;
