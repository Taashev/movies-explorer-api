const { messageErrors } = require('../utils/constants');

const handleErrors = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500
      ? messageErrors.serverError
      : message,
  });

  next();
};

module.exports = handleErrors;
