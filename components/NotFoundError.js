const BadRequestError = require('./BadRequestError');

class NotFoundError extends BadRequestError {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.name = 'NotFound';
  }
}

module.exports = NotFoundError;
