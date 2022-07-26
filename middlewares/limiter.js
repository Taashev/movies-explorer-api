const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // Limit each IP to 30 requests per `window` (here, per 15 minutes)
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: 'Уф... вот это скорость! Дайте серверу минутку',
});

module.exports = limiter;
