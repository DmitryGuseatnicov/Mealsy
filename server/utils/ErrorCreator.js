class ErrorCreator extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ErrorCreator(404, message);
  }

  static internal(message) {
    return new ErrorCreator(500, message);
  }

  static forbidden(message) {
    return new ErrorCreator(403, message);
  }
}

module.exports = ErrorCreator;
