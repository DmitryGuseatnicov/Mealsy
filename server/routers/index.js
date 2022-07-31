const express = require('express');
const userRouter = require('./UserRouter');
const dishBookRouter = require('./DishBookRouter');
const dishRouter = require('./DishRouter');
const KitchenTypeRouter = require('./KitchenTypeRouter');

const router = express.Router();

router.use('/user', userRouter);
router.use('/dish-book', dishBookRouter);
router.use('/dish', dishRouter);
router.use('/kitchen-type', KitchenTypeRouter);

module.exports = router;
