const NotFoundError = require('../components/NotFoundError');
const { messageErrors } = require('../utils/constants');

const notFound = (req, res, next) => next(new NotFoundError(messageErrors.notFound));

module.exports = notFound;
