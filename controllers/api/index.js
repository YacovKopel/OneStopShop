const router = require('express').Router();
const marketPlaceRoutes = require('./marketplaceRoutes');
const newItemRoutes = require('./newItemRoutes');


// Change later to fit our models
router.use('/marketplace', marketPlaceRoutes);
router.use('/newitem', newItemRoutes);

module.exports = router;
