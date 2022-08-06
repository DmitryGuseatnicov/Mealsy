const express = require('express');
const { body } = require('express-validator');

const productTypeController = require('../controllers/productTypeController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const productTypeRouter = express.Router();

productTypeRouter.get('/', productTypeController.getAll);

productTypeRouter.get('/:productTypeId', productTypeController.getOneById);

productTypeRouter.post(
  '/',
  body('name')
    .notEmpty()
    .toLowerCase()
    .withMessage('Укажите название типа продукта'),
  authMiddleware,
  roleMiddleware,
  productTypeController.create
);

productTypeRouter.patch(
  '/:productTypeId',
  body('name')
    .notEmpty()
    .toLowerCase()
    .withMessage('Укажите название типа продукта'),
  authMiddleware,
  roleMiddleware,
  productTypeController.update
);

productTypeRouter.delete(
  '/:productTypeId',
  authMiddleware,
  roleMiddleware,
  productTypeController.remove
);

module.exports = productTypeRouter;
