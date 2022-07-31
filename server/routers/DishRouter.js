const express = require('express');

const DishRouter = express.Router();

DishRouter.get('/', () => {});
DishRouter.get('/:dishId', () => {});
DishRouter.post('/', () => {});
DishRouter.patch('/:dishId', () => {});
DishRouter.delete('/:dishId', () => {});

module.exports = DishRouter;
