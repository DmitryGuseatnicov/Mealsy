const express = require('express');
const userRouter = require('./userRouter');
const dishBookRouter = require('./dishBookRouter');
const receptRouter = require('./receptRouter');
const kitchenTypeRouter = require('./kitchenTypeRouter');
const productRouter = require('./productRouter');
const productTypeRouter = require('./productTypeRouter');

const router = express.Router();

router.use('/user', userRouter);
router.use('/dish-book', dishBookRouter);
router.use('/recept', receptRouter);
router.use('/kitchen-type', kitchenTypeRouter);
router.use('/product', productRouter);
router.use('/product-type', productTypeRouter);

module.exports = router;
