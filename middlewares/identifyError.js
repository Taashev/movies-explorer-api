const HttpError = require('../components/HttpError');
const ConflictError = require('../components/ConflictError');

const { errorMessages } = require('../utils/constants');

const {
  badRequest,
  mailBusy,
} = errorMessages;

const identifyError = (err) => {
  if (err.code === 11000) {
    return new ConflictError(mailBusy);
  }

  if (err.name === 'ValidationError') {
    return new HttpError(badRequest);
  }

  return err;
};

module.exports = identifyError;