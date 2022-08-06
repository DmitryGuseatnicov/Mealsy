const { validationResult } = require('express-validator');

const ErrorCreator = require('./ErrorCreator');

const checkValidation = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw ErrorCreator.badRequest(errors.array());
  }
};

module.exports = checkValidation;
