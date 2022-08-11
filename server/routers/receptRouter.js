const express = require('express');
const { body } = require('express-validator');

const receptController = require('../controllers/receptController');
const authMiddleware = require('../middleware/authMiddleware');
const paginationMiddleware = require('../middleware/paginationMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const receptRouter = express.Router();

receptRouter.get('/', paginationMiddleware, receptController.getManyByParams);

receptRouter.get('/:receptId', receptController.getOneById);

receptRouter.post(
  '/',
  body('name').notEmpty().toLowerCase().withMessage('Укажите название рецепта'),
  body('kitchen').notEmpty().toLowerCase().withMessage('Укажите какая кухня'),
  body('descriptions')
    .notEmpty()
    .toLowerCase()
    .withMessage('Опишите процесс приготовления'),
  body('ingredients').notEmpty().withMessage('Добавте ингридиенты'),
  authMiddleware,
  roleMiddleware,
  receptController.create
);

receptRouter.patch(
  '/:receptId',
  body('name').notEmpty().toLowerCase().withMessage('Укажите название рецепта'),
  body('kitchen').notEmpty().toLowerCase().withMessage('Укажите какая кухня'),
  body('descriptions')
    .notEmpty()
    .toLowerCase()
    .withMessage('Опишите процесс приготовления'),
  authMiddleware,
  roleMiddleware,
  receptController.update
);

receptRouter.delete(
  '/:receptId',
  authMiddleware,
  roleMiddleware,
  receptController.remove
);

module.exports = receptRouter;
