const router = require("express").Router();
const { Product } = require("../../models");

router.put("/onmkt/:id", async (req, res) => {
  try {
    const itemData = Product.update(
      {
        onMarketplace: true,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "Added to marketplace" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
