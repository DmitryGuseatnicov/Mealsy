const { DishBook } = require('../models');
const DishBookRecept = require('../models/DishBookRecept');
const checkValidation = require('../utils/checkValidation');
const ErrorCreator = require('../utils/ErrorCreator');

const getAll = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const dishBooks = await DishBook.findAll({ where: { userId } });

    if (!dishBooks) {
      throw ErrorCreator.badRequest({
        message: 'У вас не создано ни одной кулинароной книги',
      });
    }

    res.status(200).json(dishBooks);
  } catch (error) {
    next(error);
  }
};

const getOneById = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { bookId } = req.params;

    const dishBook = await DishBook.findOne({ where: { userId, id: bookId } });

    if (!dishBook) {
      throw ErrorCreator.badRequest({ message: 'Данная книга не найдена' });
    }

    res.status(200).json(dishBook);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    checkValidation(req);

    const { id } = req.user;
    const { name } = req.body;

    const dishBook = await DishBook.create({ name, userId: id });
    res.status(200).json(dishBook);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    checkValidation(req);

    const { id: userId } = req.user;
    const { bookId } = req.params;

    await DishBook.update(req.body, { where: { userId, id: bookId } });
    const dishBook = await DishBook.findOne({ where: { userId, id: bookId } });

    res.status(200).json(dishBook);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { bookId } = req.params;

    const isDeleted = await DishBook.destroy({ where: { userId, id: bookId } });
    DishBookRecept.destroy({ where: { dishBookId: bookId } });
    if (!isDeleted) {
      throw ErrorCreator.badRequest({ message: 'Что-то пошло не так' });
    }

    res.status(200).json({ message: 'Книга успешно удалена' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getOneById,
  create,
  update,
  remove,
};
