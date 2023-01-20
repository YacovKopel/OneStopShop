const router = require('express').Router();
const marketplaceRoutes = require('./marketplaceRoutes');
const newItemRoutes = require('./newItemRoutes');


// Change later to fit our models
router.use('/marketplace',marketplaceRoutes);
router.use('/newItem', newItemRoutes);

module.exports = router;
