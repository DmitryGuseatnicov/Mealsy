const express = require('express');
const userRouter = require('./userRouter');
const dishBookRouter = require('./dishBookRouter');
const dishRouter = require('./dishRouter');
const kitchenTypeRouter = require('./kitchenTypeRouter');

const router = express.Router();

router.use('/user', userRouter);
router.use('/dish-book', dishBookRouter);
router.use('/dish', dishRouter);
router.use('/kitchen-type', kitchenTypeRouter);

module.exports = router;
