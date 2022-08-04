const { KitchenType } = require('../models');
const ErrorCreator = require('../utils/ErrorCreator');

const getAll = async (req, res, next) => {
  try {
    const kitchenType = await KitchenType.findAll();
    if (!kitchenType) {
      throw ErrorCreator.badRequest({
        message: 'На данный момент не одного вида кухни не создано',
      });
    }

    res.status(200).json(kitchenType);
  } catch (error) {
    next(error);
  }
};

const getOneById = async (req, res, next) => {
  try {
    const { kitchenTypeId: id } = req.params;

    const kitchenType = await KitchenType.findOne({ where: { id } });

    if (!kitchenType) {
      throw ErrorCreator.badRequest({
        message: 'Данной кухни не сушествует',
      });
    }

    res.status(200).json(kitchenType);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const isUsedKitchenType = await KitchenType.findOne({ where: { name } });

    if (isUsedKitchenType) {
      throw ErrorCreator.badRequest({
        message: 'Такой вариант кухни уже сушетвует ',
      });
    }

    const kitchenType = await KitchenType.create({ name });

    res.status(200).json(kitchenType);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { kitchenTypeId: id } = req.params;

    await KitchenType.update(req.body, { where: { id } });
    const kitchenType = await KitchenType.findOne({ where: { id } });

    res.status(200).json(kitchenType);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { kitchenTypeId: id } = req.params;

    await KitchenType.destroy({ where: { id } });
    const kitchenType = await KitchenType.findOne({ where: { id } });

    if (kitchenType) {
      throw ErrorCreator.badRequest({ message: 'Что-то пошло не так' });
    }

    res.status(200).json({ message: 'Кухня успешно удалена' });
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
