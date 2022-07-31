const KitchenType = require('./KitchenType');
const Dish = require('./Dish');
const DishBook = require('./DishBook');
const Favorites = require('./Favorites');
const Ingredient = require('./Ingredient');
const Pfc = require('./Pfc');
const Product = require('./Product');
const ProductType = require('./ProductType');
const Recept = require('./Recept');
const User = require('./User');
const DishKitchenType = require('./DishKitchenType');

User.hasMany(DishBook);
DishBook.belongsTo(User);

User.hasMany(Favorites);
Favorites.belongsTo(User);

DishBook.hasMany(Dish);
Dish.belongsTo(DishBook);

Dish.hasMany(Favorites);
Favorites.belongsTo(Dish);

Dish.hasOne(Pfc);
Pfc.belongsTo(Dish);

Dish.hasOne(Recept);
Recept.belongsTo(Dish);

Recept.hasMany(Ingredient);
Ingredient.belongsTo(Recept);

Ingredient.hasOne(Product);
Product.belongsTo(Ingredient);

Product.hasOne(Pfc);
Pfc.belongsTo(Product);

ProductType.hasMany(Product);
Product.belongsTo(ProductType);

Dish.belongsToMany(KitchenType, { through: DishKitchenType });
KitchenType.belongsToMany(Dish, { through: DishKitchenType });

module.exports = {
  KitchenType,
  Dish,
  DishBook,
  Favorites,
  Ingredient,
  Pfc,
  Product,
  ProductType,
  Recept,
  User,
};
