const BadRequestError = require('../components/BadRequestError');
const ConflictError = require('../components/ConflictError');

const identifyError = (err, message) => {
  if (err.code === 11000) {
    return new ConflictError(message);
  }

  if (err.name === 'ValidationError' || err.name === 'CastError') {
    return new BadRequestError(message);
  }

  return err;
};

module.exports = identifyError;
