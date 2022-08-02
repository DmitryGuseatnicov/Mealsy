const express = require('express');

const dishRouter = express.Router();

dishRouter.get('/', () => {});
dishRouter.get('/:dishId', () => {});
dishRouter.post('/', () => {});
dishRouter.patch('/:dishId', () => {});
dishRouter.delete('/:dishId', () => {});

module.exports = dishRouter;
