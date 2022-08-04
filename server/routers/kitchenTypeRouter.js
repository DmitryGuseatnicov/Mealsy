const express = require('express');

const kitchenTypeRouter = express.Router();

kitchenTypeRouter.get('/', () => {});
kitchenTypeRouter.post('/', () => {});
kitchenTypeRouter.patch('/:kitchenTypeId', () => {});
kitchenTypeRouter.delete('/:kitchenTypeId', () => {});

module.exports = kitchenTypeRouter;
