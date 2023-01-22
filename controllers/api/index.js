const router = require('express').Router();
const marketPlaceRoutes = require('./marketplaceRoutes');
const newItemRoutes = require('./newItemRoutes');
const myStoreItemsRoutes = require('./myStoreItemsRoutes')
const userRoutes = require('./userRoutes')


// Change later to fit our models
router.use('/marketPlaceRoutes', marketPlaceRoutes);
router.use('/myStoreItemsRoutes', myStoreItemsRoutes);
router.use('/newItemRoutes',newItemRoutes);
router.use('/userRoutes', userRoutes);

module.exports = router;
