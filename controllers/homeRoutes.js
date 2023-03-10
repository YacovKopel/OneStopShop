const router = require("express").Router();
const { Product } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/newItem", withAuth, async (req, res) => {
  try {
    res.render("newitem", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/mystore", withAuth, async (req, res) => {
  try {
    const newItemData = await Product.findAll();

    const products = newItemData.map((product) => product.get({ plain: true }));
    res.render("mystore", {
      products,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/marketplace", withAuth, async (req, res) => {
  try {
    const newItemData = await Product.findAll({
      where: { onMarketplace: true },
    });
    const products = newItemData.map((product) => product.get({ plain: true }));
    console.log(products);
    res.render("marketplace", {
      products,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Redirect all other routes to homepage
router.get("*", (req, res) => {
  res.redirect("/");
  return;
});

module.exports = router;
