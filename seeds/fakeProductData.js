const { Product } = require('../models');

const productdata = [
  {
 product_name:"Book",
 description:"harry potter and the chamber of secrets",
 image:"image.png", 
 seller: "Bob",
 price:"9.99"
  },
  {
product_name:"Car",
 description:"brand new JEEP CHEROKKEE",
 image:"image.png", 
 seller: "Steve",
 price:"39,999"
},
];

const seedProduct = () => Product.bulkCreate(productdata);

module.exports = seedProduct;