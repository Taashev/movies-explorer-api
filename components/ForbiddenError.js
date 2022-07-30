const BadRequestError = require('./BadRequestError');

class ForbiddenError extends BadRequestError {
  constructor(message) {
    super(message);
    this.statusCode = 403;
    this.name = 'Forbidden';
  }
}

module.exports = ForbiddenError;
