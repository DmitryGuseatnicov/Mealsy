const express = require('express');
const { body } = require('express-validator');

const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const paginationMiddleware = require('../middleware/paginationMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const productRouter = express.Router();

productRouter.get('/', paginationMiddleware, productController.getByParams);

productRouter.get('/:productId', productController.getById);

productRouter.post(
  '/',
  body('name')
    .notEmpty()
    .toLowerCase()
    .withMessage('Укажите название продукта'),
  body('proteins').notEmpty().toLowerCase().withMessage('Укажите БЖУ'),
  body('fats').notEmpty().toLowerCase().withMessage('Укажите БЖУ'),
  body('carbohydrates').notEmpty().toLowerCase().withMessage('Укажите БЖУ'),
  body('energyValue').notEmpty().toLowerCase().withMessage('Укажите БЖУ'),
  body('productType')
    .notEmpty()
    .toLowerCase()
    .withMessage('Укажите тип продукта'),
  authMiddleware,
  roleMiddleware,
  productController.create
);

productRouter.patch(
  '/:productId',
  body('name')
    .notEmpty()
    .toLowerCase()
    .withMessage('Укажите название продукта'),
  body('proteins').notEmpty().toLowerCase().withMessage('Укажите БЖУ'),
  body('fats').notEmpty().toLowerCase().withMessage('Укажите БЖУ'),
  body('carbohydrates').notEmpty().toLowerCase().withMessage('Укажите БЖУ'),
  body('energyValue').notEmpty().toLowerCase().withMessage('Укажите БЖУ'),
  body('productType')
    .notEmpty()
    .toLowerCase()
    .withMessage('Укажите тип продукта'),
  authMiddleware,
  roleMiddleware,
  productController.update
);

productRouter.delete(
  '/:productId',
  authMiddleware,
  roleMiddleware,
  productController.remove
);

module.exports = productRouter;
