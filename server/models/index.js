const KitchenType = require('./KitchenType');
const DishBook = require('./DishBook');
const Favorites = require('./Favorites');
const Ingredient = require('./Ingredient');
const Pfc = require('./Pfc');
const Product = require('./Product');
const ProductType = require('./ProductType');
const Recept = require('./Recept');
const User = require('./User');
const ReceptKitchenType = require('./ReceptKitchenType');

User.hasMany(DishBook);
DishBook.belongsTo(User);

User.hasMany(Favorites);
Favorites.belongsTo(User);

DishBook.hasMany(Recept);
Recept.belongsTo(DishBook);

Recept.hasMany(Favorites);
Favorites.belongsTo(Recept);

Recept.hasOne(Pfc);
Pfc.belongsTo(Recept);

/* .hasOne(Recept);
Recept.belongsTo(Dish); */

Recept.hasMany(Ingredient);
Ingredient.belongsTo(Recept);

Ingredient.hasOne(Product);
Product.belongsTo(Ingredient);

Product.hasOne(Pfc);
Pfc.belongsTo(Product);

ProductType.hasMany(Product);
Product.belongsTo(ProductType);

Recept.belongsToMany(KitchenType, { through: ReceptKitchenType });
KitchenType.belongsToMany(Recept, { through: ReceptKitchenType });

module.exports = {
  KitchenType,
  DishBook,
  Favorites,
  Ingredient,
  Pfc,
  Product,
  ProductType,
  Recept,
  User,
};
