const { KitchenType } = require('../models');
const checkValidation = require('../utils/checkValidation');
const createFilePath = require('../utils/createFilePath');
const ErrorCreator = require('../utils/ErrorCreator');

const getAll = async (req, res, next) => {
  try {
    const kitchenTypes = await KitchenType.findAll({ where: req.query });
    const isKitchenTypesEmpty = kitchenTypes.length <= 0;
    if (isKitchenTypesEmpty) {
      throw ErrorCreator.badRequest({
        message: 'На данный момент не одного вида кухни не создано',
      });
    }

    res.status(200).json(kitchenTypes);
  } catch (error) {
    next(error);
  }
};

const getOneById = async (req, res, next) => {
  try {
    const { kitchenTypeId: id } = req.params;
    const kitchenType = await KitchenType.findOne({
      where: { id },
    });

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
    checkValidation(req);

    const { name } = req.body;

    const kitchenType = await KitchenType.create({
      name,
      img: createFilePath(req),
    });

    res.status(200).json(kitchenType);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      next(ErrorCreator.badRequest({ message: 'Данный тип уже существует' }));
    } else {
      next(error);
    }
  }
};

const update = async (req, res, next) => {
  try {
    checkValidation(req);

    const { name } = req.body;
    const { kitchenTypeId: id } = req.params;

    const imgPath = createFilePath(req);
    await KitchenType.update(
      imgPath
        ? {
            name,
            img: imgPath,
          }
        : {
            name,
          },
      { where: { id } }
    );

    const kitchenType = await KitchenType.findOne({ where: { id } });

    res.status(200).json(kitchenType);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      next(ErrorCreator.badRequest({ message: 'Данный тип уже существует' }));
    } else {
      next(error);
    }
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
