const NotFoundError = require('../components/NotFoundError');

const notFound = (req, res, next) => next(new NotFoundError('Ресурс не найден'));

module.exports = notFound;
