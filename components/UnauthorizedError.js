const BadRequestError = require('./BadRequestError');

class UnauthorizedError extends BadRequestError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
    this.name = 'Unauthorized';
  }
}

module.exports = UnauthorizedError;
