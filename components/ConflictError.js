const BadRequestError = require('./BadRequestError');

class ConflictError extends BadRequestError {
  constructor(message) {
    super(message);
    this.statusCode = 409;
    this.name = 'ConflictError';
  }
}

module.exports = ConflictError;
