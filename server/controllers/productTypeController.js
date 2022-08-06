const { Op } = require('sequelize');
const uuid = require('uuid');
const path = require('path');

const { ProductType } = require('../models');
const ErrorCreator = require('../utils/ErrorCreator');

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
    const { name } = req.body;
    const { img } = req.files ? req.files : {};

    const isUsedProductType = await ProductType.findOne({ where: { name } });
    if (isUsedProductType) {
      throw ErrorCreator.badRequest({ message: 'Данный тип уже существует' });
    }

    const fileName = `${uuid.v4()}.jpg`;

    if (img) {
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
    }

    const productType = await ProductType.create({
      name,
      img: img ? `${req.protocol}://${req.get('host')}/${fileName}` : '',
    });

    res.status(200).json(productType);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { productTypeId: id } = req.params;
    const { name } = req.body;
    const { img } = req.files ? req.files : {};

    const isUsedProductType = await ProductType.findOne({
      where: { name, id: { [Op.ne]: id } },
    });
    if (isUsedProductType) {
      throw ErrorCreator.badRequest({ message: 'Данный тип уже существует' });
    }

    const fileName = `${uuid.v4()}.jpg`;
    if (img) {
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
    }

    await ProductType.update(
      img
        ? {
            name,
            img: `${req.protocol}://${req.get('host')}/${fileName}`,
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
    next(error);
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
