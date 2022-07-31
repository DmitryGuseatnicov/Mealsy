/* eslint-disable no-unused-vars */
const errorAdapter = require('../adapters/errorAdapter');
const ErrorCreator = require('../utils/ErrorCreator');

const errorMiddleware = (error, req, res, next) => {
  if (!(error instanceof ErrorCreator)) {
    return res.status(500).json([{ message: 'Unknown error', error }]);
  }

  const isArray = Array.isArray(error.message);

  return res.status(error.status).json({
    message: isArray ? errorAdapter(error.message) : [error.message],
    timestamp: Date.now(),
    url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
  });
};

module.exports = errorMiddleware;
