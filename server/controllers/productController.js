const { Product, ProductType, Pfc } = require('../models');
const checkValidation = require('../utils/checkValidation');
const createFilePath = require('../utils/createFilePath');
const ErrorCreator = require('../utils/ErrorCreator');

const createIncludes = (query = {}) => {
  const { productTypeId, productType } = query;

  const productWhere = {};
  if (productTypeId) productWhere.id = productTypeId;
  if (productType) productWhere.name = productType.toLowerCase();

  return [{ model: Pfc }, { model: ProductType, where: productWhere }];
};

const getByParams = async (req, res, next) => {
  try {
    const { name } = req.query;
    const products = await Product.findAll({
      where: name ? { name: name.toLowerCase() } : {},
      include: createIncludes(req.query),
    });

    const isProductEmpty = products.length <= 0;
    if (isProductEmpty) {
      throw ErrorCreator.badRequest({
        message: 'Не одного продукта не кайдено',
      });
    }

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { productId: id } = req.params;
    const product = await Product.findOne({
      where: { id },
      include: createIncludes(),
    });

    if (!product) {
      throw ErrorCreator.badRequest({ message: 'Данный продукт не найден' });
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    checkValidation(req);

    const {
      name,
      description,
      proteins,
      fats,
      carbohydrates,
      energyValue,
      productType: type,
    } = req.body;

    const productType = await ProductType.findOne({ where: { name: type } });
    if (!productType) {
      throw ErrorCreator.badRequest({ message: 'Данного типа не существует' });
    }

    const product = await Product.create({
      name,
      description,
      img: createFilePath(req),
      productTypeId: productType.id,
    });

    await Pfc.create({
      proteins,
      fats,
      carbohydrates,
      energyValue,
      productId: product.id,
    });

    if (!product) {
      throw ErrorCreator.badRequest({
        message: 'Что-то пошло не так попробуйте позже',
      });
    }

    const productRes = await Product.findOne({
      where: { id: product.id },
      include: createIncludes(),
    });

    res.status(200).json(productRes);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      next(
        ErrorCreator.badRequest({ message: 'Данный продуст уже существует' })
      );
    } else {
      next(error);
    }
  }
};

const update = async (req, res, next) => {
  try {
    checkValidation(req);

    const { productId: id } = req.params;
    const {
      name,
      description,
      proteins,
      fats,
      carbohydrates,
      energyValue,
      productType: type,
    } = req.body;

    const productType = await ProductType.findOne({ where: { name: type } });
    if (!productType) {
      throw ErrorCreator.badRequest({ message: 'Данного типа не существует' });
    }

    const imgPath = createFilePath(req);
    await Product.update(
      imgPath
        ? {
            name,
            description,
            productTypeId: productType.id,
            img: imgPath,
          }
        : {
            name,
            description,
            productTypeId: productType.id,
          },
      { where: { id } }
    );
    await Pfc.update(
      {
        proteins,
        fats,
        carbohydrates,
        energyValue,
        productId: id,
      },
      { where: { id } }
    );

    const product = await Product.findOne({
      where: { id },
      include: createIncludes(),
    });
    if (!product) {
      throw ErrorCreator.badRequest({ message: 'Данный продукт не найден' });
    }

    res.status(200).json(product);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      next(
        ErrorCreator.badRequest({ message: 'Данный продуст уже существует' })
      );
    } else {
      next(error);
    }
  }
};

const remove = async (req, res, next) => {
  try {
    const { productId: id } = req.params;

    const isDeleted = await Product.destroy({ where: { id } });
    await Pfc.destroy({ where: { productId: id } });

    if (!isDeleted) {
      throw ErrorCreator.badRequest({ message: 'Что-то пошло не так' });
    }

    res.status(200).json({ message: 'Продукт успешно удален' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getByParams,
  getById,
  create,
  update,
  remove,
};
