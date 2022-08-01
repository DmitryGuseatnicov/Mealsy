const jwt = require('jsonwebtoken');
const ErrorCreator = require('../utils/ErrorCreator');

const authMiddleware = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }

  const token = req.headers?.authorization?.split(' ')[1];
  if (!token) {
    throw ErrorCreator.badRequest({ message: 'Пользователь не авторизован' });
  }

  const userDecoded = jwt.verify(token, '123456');

  req.user = userDecoded;
  next();
};

module.exports = authMiddleware;
