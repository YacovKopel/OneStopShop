const router = require('express').Router();
const { User, Product } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/newItem', async (req, res) => {
  try {
    res.render('newitem');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/mystore', async (req, res) => {
    try {
      const newItemData = await Product.findAll()
  
      const products = newItemData.map((product) =>
        product.get({ plain: true })
      );
  console.log(products);
  console.log(newItemData);
        res.render('mystore', {
          products
        });
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.get('/marketplace', async (req, res) => {
  try {
    const newItemData = await Product.findAll({where:{onMarketplace: true} })
    const products = newItemData.map((product) =>
    product.get({ plain: true })
  );
  console.log(products)
    res.render('marketplace', {products});
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;
