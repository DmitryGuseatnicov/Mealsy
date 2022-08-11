const sequelize = require('../database/database');
const { Recept, Pfc, KitchenType, Ingredient, Product } = require('../models');
const ReceptKitchenType = require('../models/ReceptKitchenType');
const checkValidation = require('../utils/checkValidation');
const convertStrArrParams = require('../utils/convertStrArrToArray');
const createFilePath = require('../utils/createFilePath');
const ErrorCreator = require('../utils/ErrorCreator');

const createIncludes = (params = {}) => {
  const { kitchenType, productName } = params;
  return [
    { model: Pfc },
    {
      model: KitchenType,
      where: kitchenType ? { name: kitchenType } : {},
    },
    {
      model: Ingredient,
      include: {
        model: Product,
        where: productName ? { name: productName } : {},
      },
    },
  ];
};

const getOneById = async (req, res, next) => {
  try {
    const { receptId: id } = req.params;
    const recept = await Recept.findOne({
      where: { id },
      include: createIncludes(),
    });

    if (!recept) {
      throw ErrorCreator.badRequest({
        message: 'К сожелению данный рецепт не найден',
      });
    }

    res.status(200).json(recept);
  } catch (error) {
    next(error);
  }
};

const getManyByParams = async (req, res, next) => {
  try {
    const { name, kitchenType, productName } = req.query;
    const { limit, offset } = req.pagination;

    const recipes = await Recept.findAll({
      where: name ? { name } : {},
      distinct: true,
      include: createIncludes({ kitchenType, productName }),
      offset,
      limit,
    });

    if (!recipes) {
      throw ErrorCreator.badRequest({
        message: 'К сожелению по данным параментрам нечего не найдено',
      });
    }

    res.status(200).json({
      total: recipes.length,
      recipes,
    });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    checkValidation(req);

    const {
      name,
      cookingTime,
      proteins,
      fats,
      carbohydrates,
      energyValue,
      descriptions,
    } = req.body;
    let { ingredients, kitchen } = req.body;

    ingredients = convertStrArrParams(ingredients);
    kitchen = convertStrArrParams(kitchen).map((k) => k.toLowerCase());

    const recept = await Recept.create(
      {
        name,
        cookingTime,
        descriptions,
        img: createFilePath(req),
      },
      { transaction: t }
    );

    await Pfc.create(
      {
        proteins,
        fats,
        carbohydrates,
        energyValue,
        receptId: recept.id,
      },
      { transaction: t }
    );

    const ingredientsNames = ingredients.map((ing) => ing.name.toLowerCase());
    const products = await Product.findAll({
      where: { name: ingredientsNames },
    });

    if (products.length !== ingredientsNames.length) {
      const productNames = products.map((pr) => pr.toJSON().name);
      const messages = ingredientsNames
        .filter((ing) => !productNames.includes(ing))
        .map((pr) => ({
          msg: `${pr} не наден в базе продуктов`,
        }));
      throw ErrorCreator.badRequest(messages);
    }

    await Ingredient.bulkCreate(
      ingredients.map((ing, i) => ({
        productId: products[i].toJSON().id,
        receptId: recept.id,
        value: ing.value,
        type: ing.type,
      })),
      { transaction: t }
    );

    const kitchenTypes = await KitchenType.findAll({
      where: { name: kitchen },
    });

    if (kitchenTypes.length !== kitchen.length) {
      const kitchenNames = kitchenTypes.map((k) => k.toJSON().name);
      const messages = kitchen
        .filter((k) => !kitchenNames.includes(k))
        .map((k) => ({
          msg: `${k} не наден в базе типов кухни`,
        }));
      throw ErrorCreator.badRequest(messages);
    }

    await ReceptKitchenType.bulkCreate(
      kitchenTypes.map((k) => ({
        kitchenTypeId: k.toJSON().id,
        receptId: recept.id,
      })),
      { transaction: t }
    );

    await t.commit();

    const fullRecept = await Recept.findOne({
      where: { id: recept.id },
      include: { all: true },
    });

    res.status(200).json(fullRecept);
  } catch (error) {
    await t.rollback();
    next(error);
  }
};

const update = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    checkValidation(req);

    const { receptId: id } = req.params;

    const {
      name,
      cookingTime,
      proteins,
      fats,
      carbohydrates,
      energyValue,
      descriptions,
    } = req.body;
    let { ingredients, kitchen } = req.body;

    ingredients = convertStrArrParams(ingredients);
    kitchen = convertStrArrParams(kitchen).map((k) => k.toLowerCase());

    const imgPath = createFilePath(req);
    await Recept.update(
      imgPath
        ? {
            name,
            cookingTime,
            descriptions,
            img: createFilePath(req),
          }
        : {
            name,
            cookingTime,
            descriptions,
          },
      { where: { id }, transaction: t }
    );

    await Pfc.update(
      {
        proteins,
        fats,
        carbohydrates,
        energyValue,
      },
      { where: { receptId: id }, transaction: t }
    );

    const ingredientsNames = ingredients.map((ing) => ing.name.toLowerCase());
    const products = await Product.findAll({
      where: { name: ingredientsNames },
    });

    if (products.length !== ingredientsNames.length) {
      const productNames = products.map((pr) => pr.toJSON().name);
      const messages = ingredientsNames
        .filter((ing) => !productNames.includes(ing))
        .map((pr) => ({
          msg: `${pr} не наден в базе продуктов`,
        }));
      throw ErrorCreator.badRequest(messages);
    }

    await Ingredient.destroy({ where: { receptId: id }, transaction: t });

    await Ingredient.bulkCreate(
      ingredients.map((ing, i) => ({
        productId: products[i].toJSON().id,
        receptId: id,
        value: ing.value,
        type: ing.type,
      })),
      { transaction: t }
    );

    const kitchenTypes = await KitchenType.findAll({
      where: { name: kitchen },
    });

    if (kitchenTypes.length !== kitchen.length) {
      const kitchenNames = kitchenTypes.map((k) => k.toJSON().name);
      const messages = kitchen
        .filter((k) => !kitchenNames.includes(k))
        .map((k) => ({
          msg: `${k} не наден в базе типов кухни`,
        }));
      throw ErrorCreator.badRequest(messages);
    }

    await ReceptKitchenType.destroy({
      where: { receptId: id },
      transaction: t,
    });

    await ReceptKitchenType.bulkCreate(
      kitchenTypes.map((k) => ({
        kitchenTypeId: k.toJSON().id,
        receptId: id,
      })),
      { transaction: t }
    );

    await t.commit();

    const receptRes = await Recept.findOne({
      where: { id },
      include: createIncludes(),
    });

    res.status(200).json(receptRes);
  } catch (error) {
    t.rollback();
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { receptId: id } = req.params;

    const isDeleted = await Recept.destroy({ where: { id } });
    Pfc.destroy({ where: { receptId: id } });
    Ingredient.destroy({ where: { receptId: id } });

    if (!isDeleted) {
      throw ErrorCreator.badRequest({ message: 'Что то пошло не так' });
    }

    res.status(200).json({ message: 'Рецепт успешно удален' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getOneById,
  getManyByParams,
  create,
  update,
  remove,
};
