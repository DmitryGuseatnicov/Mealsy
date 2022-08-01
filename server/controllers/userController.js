const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../models');
const ErrorCreator = require('../utils/ErrorCreator');

const createToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role, name: user.name }, '123456', {
    expiresIn: '24h',
  });
};

const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw ErrorCreator.badRequest(errors.array());
    }

    const { name, mail, password } = req.body;

    const isUsed = await User.findOne({ where: { mail } });
    if (isUsed) {
      throw ErrorCreator.badRequest({ message: 'Данный email занят' });
    }

    const hashPass = await bcrypt.hash(password, 5);
    const user = await User.create({ name, mail, password: hashPass });
    const token = createToken(user);

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw ErrorCreator.badRequest(errors.array());
    }

    const { mail, password } = req.body;

    const user = await User.findOne({ where: { mail } });
    if (!user) {
      throw ErrorCreator.badRequest({ message: 'Неверный логин или пароль' });
    }

    const comparePass = bcrypt.compareSync(password, user.password);
    if (!comparePass) {
      throw ErrorCreator.badRequest({ message: 'Неверный логин или пароль' });
    }

    const token = createToken(user);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw ErrorCreator.badRequest(errors.array());
    }
    const { id } = req.user;
    await User.update(req.body, { where: { id } });
    const user = await User.findOne({ where: { id } });

    const token = createToken(user);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.user;
    await User.destroy({ where: { id } });

    const user = await User.findOne({ where: { id } });
    if (user) {
      throw ErrorCreator.badRequest({ message: 'Что-то пошло не так' });
    }

    res.status(200).json({ message: 'Пользователь был успешно удален' });
  } catch (error) {
    next(error);
  }
};

const check = async (req, res, next) => {
  try {
    const token = createToken(req.user);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const userController = {
  register,
  login,
  check,
  update,
  remove,
};

module.exports = userController;
