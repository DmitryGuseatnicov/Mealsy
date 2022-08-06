const { Op } = require('sequelize');
const { validationResult } = require('express-validator');

const createFilePath = require('../utils/createFilePath');

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
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      throw ErrorCreator.badRequest(errors.array());
    }

    const { name } = req.body;

    const isUsedProductType = await ProductType.findOne({ where: { name } });
    if (isUsedProductType) {
      throw ErrorCreator.badRequest({ message: 'Данный тип уже существует' });
    }

    const productType = await ProductType.create({
      name,
      img: createFilePath(req),
    });

    res.status(200).json(productType);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      throw ErrorCreator.badRequest(errors.array());
    }

    const { productTypeId: id } = req.params;
    const { name } = req.body;

    const isUsedProductType = await ProductType.findOne({
      where: { name, id: { [Op.ne]: id } },
    });
    if (isUsedProductType) {
      throw ErrorCreator.badRequest({ message: 'Данный тип уже существует' });
    }

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
