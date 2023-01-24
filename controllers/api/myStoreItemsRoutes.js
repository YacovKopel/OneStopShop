const router = require("express").Router();
const { Product } = require("../../models");

router.get('/newItem', async (req, res) => {
  try {
    const newItemData = await Product.findAll()

    const products = newItemData.map((product) =>
      product.get({ plain: true })
    );

    req.session.save(() => {
      res.render('mystore', {
        products
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
