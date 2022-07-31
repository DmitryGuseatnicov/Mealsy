const ErrorCreator = require('../utils/ErrorCreator');

// eslint-disable-next-line no-unused-vars
const errorMiddleware = (error, req, res, next) => {
  if (error instanceof ErrorCreator) {
    return res.status(error.status).json({
      message: error.message,
      timestamp: Date.now(),
      url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
    });
  }
  return res.status(500).json({ message: 'Unknown error', error });
};

module.exports = errorMiddleware;
