const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const dishBookController = require('../controllers/dishBookController');

const DishBookRouter = express.Router();

DishBookRouter.get('/', authMiddleware, dishBookController.getAll);
DishBookRouter.get('/:bookId', authMiddleware, dishBookController.getOneById);
DishBookRouter.post('/', authMiddleware, dishBookController.create);
DishBookRouter.patch('/:bookId', authMiddleware, dishBookController.update);
DishBookRouter.delete('/:bookId', authMiddleware, dishBookController.remove);

module.exports = DishBookRouter;
