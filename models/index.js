const Product = require("./Product");
const User=require("./User")

// newitem.hasMany(marketplace, {
//   foreignKey: "newitem_id",
//   onDelete: "CASCADE",
// });

// marketplace.belongsTo(mystore, {
//   foreignKey: "newitem_id",
// });

module.exports = { Product,  User };
