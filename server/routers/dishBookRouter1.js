const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const dishBookController = require('../controllers/dishBookController');

const dishBookRouter = express.Router();

dishBookRouter.get('/', authMiddleware, dishBookController.getAll);
dishBookRouter.get('/:bookId', authMiddleware, dishBookController.getOneById);
dishBookRouter.post('/', authMiddleware, dishBookController.create);
dishBookRouter.patch('/:bookId', authMiddleware, dishBookController.update);
dishBookRouter.delete('/:bookId', authMiddleware, dishBookController.remove);

module.exports = dishBookRouter;
