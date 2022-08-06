const express = require('express');
const { body } = require('express-validator');

const authMiddleware = require('../middleware/authMiddleware');
const dishBookController = require('../controllers/dishBookController');

const dishBookRouter = express.Router();

dishBookRouter.get('/', authMiddleware, dishBookController.getAll);

dishBookRouter.get('/:bookId', authMiddleware, dishBookController.getOneById);

dishBookRouter.post(
  '/',
  body('name')
    .notEmpty()
    .toLowerCase()
    .withMessage('Укажите названия кулинароной книги'),
  authMiddleware,
  dishBookController.create
);

dishBookRouter.patch(
  '/:bookId',
  body('name')
    .notEmpty()
    .toLowerCase()
    .withMessage('Укажите названия кулинароной книги'),
  authMiddleware,
  dishBookController.update
);

dishBookRouter.delete('/:bookId', authMiddleware, dishBookController.remove);

module.exports = dishBookRouter;
