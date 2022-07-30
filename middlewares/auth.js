const jwt = require('jsonwebtoken');
const { JWT_SECRET, NODE_ENV, SECRET_KEY } = require('../config');
const UnauthorizedError = require('../components/UnauthorizedError');
const { messageErrors } = require('../utils/constants');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) return next(new UnauthorizedError(messageErrors.noToken));

  try {
    req.user = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : SECRET_KEY,
    );
    return next();
  } catch (err) {
    return next(new UnauthorizedError(messageErrors.invalidToken));
  }
};

module.exports = auth;
