const { ProductType } = require('../models');
const createFilePath = require('../utils/createFilePath');
const ErrorCreator = require('../utils/ErrorCreator');
const checkValidation = require('../utils/checkValidation');

const getAll = async (req, res, next) => {
  try {
    const productTypes = await ProductType.findAll();

    if (productTypes.length <= 0) {
      throw ErrorCreator.badRequest({ message: 'Не одного типа не найдено' });
    }

    res.status(200).json(productTypes);
  } catch (error) {
    next(error);
  }
};

const getOneById = async (req, res, next) => {
  try {
    const { productTypeId: id } = req.params;

    const productType = await ProductType.findOne({ where: { id } });

    if (!productType) {
      throw ErrorCreator.badRequest({ message: 'Данный тип не найден' });
    }

    res.status(200).json(productType);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    checkValidation(req);

    const { name } = req.body;

    const productType = await ProductType.create({
      name,
      img: createFilePath(req),
    });

    res.status(200).json(productType);
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

    const { productTypeId: id } = req.params;
    const { name } = req.body;

    const imgPath = createFilePath(req);
    await ProductType.update(
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

    const productType = await ProductType.findOne({ where: { id } });

    if (!productType) {
      throw ErrorCreator.badRequest({ message: 'Данного типа не существует' });
    }

    res.status(200).json(productType);
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
    const { productTypeId: id } = req.params;
    const isDeleted = await ProductType.destroy({ where: { id } });

    if (!isDeleted) {
      throw ErrorCreator.badRequest({ message: 'Что-то пошло не так' });
    } else {
      res.status(200).json({ message: 'Тип успешно удален' });
    }
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
