const express = require('express');

const DishBookRouter = express.Router();

DishBookRouter.get('/', () => {});
DishBookRouter.get('/:bookId', () => {});
DishBookRouter.post('/', () => {});
DishBookRouter.patch('/', () => {});
DishBookRouter.delete('/:bookId', () => {});

module.exports = DishBookRouter;
