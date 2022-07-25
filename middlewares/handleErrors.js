const identifyError = require('../utils/identifyError');

const handleErrors = (err, req, res, next) => {
  const { statusCode = 500, message } = identifyError(err);

  res.status(statusCode).send({
    message: statusCode === 500
      ? 'На сервере произошла ошибка'
      : message,
  });

  next();
};

module.exports = handleErrors;
