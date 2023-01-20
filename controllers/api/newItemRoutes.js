const router = require('express').Router();
const { newitem } = require('../../models/newitem');

router.post('/', async (req, res) => {
  try {
    // Get all users, sorted by name
   const newItemData = await newitem.create(req.body)
    // Serialize user data so templates can read it
    const newItem = newItemData.map((marketplace) => marketplace.post({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('marketplace', { newItem });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
