const express = require('express');
const { body } = require('express-validator');

const kitchenTypeController = require('../controllers/kitchenTypeController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const kitchenTypeRouter = express.Router();

kitchenTypeRouter.get('/', kitchenTypeController.getAll);

kitchenTypeRouter.get(
  '/:kitchenTypeId',
  authMiddleware,
  roleMiddleware,
  kitchenTypeController.getOneById
);

kitchenTypeRouter.post(
  '/',
  body('name')
    .notEmpty()
    .toLowerCase()
    .withMessage('Название кухни обязательный параметр'),
  authMiddleware,
  roleMiddleware,
  kitchenTypeController.create
);

kitchenTypeRouter.patch(
  '/:kitchenTypeId',
  body('name')
    .notEmpty()
    .toLowerCase()
    .withMessage('Название кухни обязательный параметр'),
  authMiddleware,
  roleMiddleware,
  kitchenTypeController.update
);

kitchenTypeRouter.delete(
  '/:kitchenTypeId',
  authMiddleware,
  roleMiddleware,
  kitchenTypeController.remove
);

module.exports = kitchenTypeRouter;
