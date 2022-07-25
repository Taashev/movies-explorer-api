const identifyError = require('./identifyError');

// eslint-disable-next-line no-unused-vars
const handleErrors = (err, req, res, next) => {
  const { statusCode = 500, message } = identifyError(err);

  res.status(statusCode).send({
    message: statusCode === 500
      ? 'На сервере произошла ошибка'
      : message,
  });
};

module.exports = handleErrors;
