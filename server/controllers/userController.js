const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const { User } = require('../models');
const ErrorCreator = require('../utils/ErrorCreator');
const createToken = require('../utils/createToken');

const splitUserData = (user) => {
  const { id, name, dataOfBirth, sex, mail, role } = user;
  return { id, name, dataOfBirth, sex, mail, role };
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

    res.status(200).json({ token, user: splitUserData(user) });
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
    res.status(200).json({ token, user: splitUserData(user) });
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

    const isUsedMail = await User.findOne({ where: { mail: req.body.mail } });

    if (isUsedMail) {
      throw ErrorCreator.badRequest({ message: 'Данный email занят' });
    }

    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 5);
    }

    await User.update(req.body, { where: { id } });
    const user = await User.findOne({ where: { id } });

    const token = createToken(user);
    res.status(200).json({ token, user: splitUserData(user) });
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
    const { user } = req;
    const token = createToken(user);
    res.status(200).json({ token, user: splitUserData(user) });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  check,
  update,
  remove,
};
