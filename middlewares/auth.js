const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../components/UnauthorizedError');
const { errorMessages } = require('../utils/constants');

const auth = (req, res, next) => {
  const { cookie } = req.headers;
  const { NODE_ENV, JWT_SECRET } = process.env;

  if (!cookie || !cookie.startsWith('jwt=')) {
    return next(new UnauthorizedError(errorMessages.unauthorized));
  }

  const token = cookie.replace('jwt=', '');
  let payload;

  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'secret-key',
    );
  } catch (err) {
    return next(new UnauthorizedError(errorMessages.unauthorized));
  }

  req.user = payload;

  return next();
};

module.exports = auth;
