const jwt = require('jsonwebtoken');
const { JWT_SECRET, NODE_ENV, SECRET_KEY } = require('../config');
const UnauthorizedError = require('../components/UnauthorizedError');
const { messageErrors } = require('../utils/constants');

const auth = (req, res, next) => {
  const cookieJWT = req.cookies.jwt;

  if (!cookieJWT) {
    return next(new UnauthorizedError(messageErrors.unauthorized));
  }

  const token = cookieJWT.replace('jwt=', '');
  let payload;

  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : SECRET_KEY,
    );
  } catch (err) {
    return next(new UnauthorizedError(messageErrors.unauthorized));
  }

  req.user = payload;

  return next();
};

module.exports = auth;
