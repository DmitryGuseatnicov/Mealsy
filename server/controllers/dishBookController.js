const { Op } = require('sequelize');

const { DishBook, Recept } = require('../models');
const DishBookRecept = require('../models/DishBookRecept');
const checkValidation = require('../utils/checkValidation');
const ErrorCreator = require('../utils/ErrorCreator');

const getAll = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const dishBooks = await DishBook.findAll({
      where: { userId },
      include: [
        {
          model: Recept,
          attributes: ['img'],
        },
      ],
    });
    const isEmpty = Object.keys(dishBooks) <= 0;
    if (isEmpty) {
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

    const dishBook = await DishBook.findOne({
      where: { userId, id: bookId },
      include: [{ model: Recept }],
    });

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

const addRecept = async (req, res, next) => {
  try {
    const { dishBookId, receptId } = req.body;

    const isAdded = await DishBookRecept.findOne({
      where: {
        dishBookId,
        receptId,
      },
    });

    if (isAdded) {
      throw ErrorCreator.badRequest({
        message: 'Данный рецепт уже есть в этой кулинарной книги',
      });
    }

    const isAddedInBook = await DishBookRecept.create({
      dishBookId,
      receptId,
    });

    if (!isAddedInBook) {
      throw ErrorCreator.badRequest({ message: 'что-то пошло не так' });
    }

    const dishBook = await DishBook.findOne({
      where: {
        id: dishBookId,
      },
      include: [{ model: Recept }],
    });
    res.status(200).json(dishBook);
  } catch (error) {
    next(error);
  }
};

const removeRecept = async (req, res, next) => {
  try {
    const { dishBookId, receptId } = req.body;

    const isRemoved = await DishBookRecept.destroy({
      where: {
        dishBookId,
        receptId,
      },
    });

    if (!isRemoved) {
      throw ErrorCreator.badRequest({ message: 'что-то пошло не так' });
    }

    const dishBook = await DishBook.findOne({
      where: {
        id: dishBookId,
      },
      include: [{ model: Recept }],
    });

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
  addRecept,
  removeRecept,
  update,
  remove,
};
