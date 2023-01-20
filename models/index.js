const newitem = require("./newitem");
const mystore = require("./mystore");
const marketplace = require("./marketplace");

newitem.hasMany(marketplace, {
  foreignKey: "newitem_id",
  onDelete: "CASCADE",
});

marketplace.belongsTo(mystore, {
  foreignKey: "newitem_id",
});

module.exports = { newitem, mystore, marketplace };
