const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const userRouter = express.Router();

userRouter.post(
  '/register',
  body('name').notEmpty().withMessage('Имя является обязательным параметром'),
  body('mail').isEmail().withMessage('Не корректный Email'),
  body('password')
    .isLength({ min: 8, max: 16 })
    .withMessage('Пароль должен содержать больше 8 символов'),
  userController.register
);

userRouter.post(
  '/login',
  body('mail').isEmail().withMessage('Не корректный Email'),
  body('password')
    .isLength({ min: 8, max: 16 })
    .withMessage('Неверный логин или пароль'),
  userController.login
);

userRouter.get('/auth', authMiddleware, userController.check);

// FIX: доделать проверки на остальные параментры
userRouter.patch(
  '/',
  body('name').notEmpty().withMessage('Имя является обязательным параметром'),
  body('mail').isEmail().withMessage('Не корректный Email'),
  body('password')
    .isLength({ min: 8, max: 16 })
    .withMessage('Пароль должен содержать больше 8 символов'),
  authMiddleware,
  userController.update
);

userRouter.delete('/', authMiddleware, userController.remove);

module.exports = userRouter;
