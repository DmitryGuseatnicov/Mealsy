const express = require('express');

const userRouter = express.Router();

userRouter.post('/register', () => {});
userRouter.post('/login', () => {});
userRouter.get('/', () => {});
userRouter.patch('/', () => {});
userRouter.delete('/', () => {});

module.exports = userRouter;
