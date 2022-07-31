const express = require('express');

const KitchenTypeRouter = express.Router();

KitchenTypeRouter.get('/', () => {});
KitchenTypeRouter.post('/', () => {});
KitchenTypeRouter.patch('/:kitchenTypeId', () => {});
KitchenTypeRouter.delete('/:kitchenTypeId', () => {});

module.exports = KitchenTypeRouter;
