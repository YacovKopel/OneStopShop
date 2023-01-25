const router = require("express").Router();
const { Product } = require("../../models");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const dbProductData = await Product.create({
      // include:{upload},
      seller: req.body.seller,
      price: req.body.price,
      description: req.body.description,
      product_name: req.body.product_name,
      image: req.body.image,
    });

    res.status(200).json(dbProductData);
    // });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
