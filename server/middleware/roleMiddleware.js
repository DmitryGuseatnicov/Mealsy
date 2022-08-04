const ErrorCreator = require('../utils/ErrorCreator');

const roleMiddleware = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  const { user } = req;

  if (user.role !== 'admin') {
    throw ErrorCreator.badRequest({
      message: 'У данного пользователя не достаточно прав',
    });
  }

  next();
};

module.exports = roleMiddleware;
