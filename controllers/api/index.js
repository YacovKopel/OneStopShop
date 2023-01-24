const router = require('express').Router();
const marketplaceRoutes = require('./marketplaceRoutes');
const newItemRoutes = require('./newItemRoutes');
const myUser=require('./userRoutes')
const myStoreRoutes=require('./myStoreItemsRoutes')


// Change later to fit our models

router.use('/marketplace',marketplaceRoutes);
router.use('/newItem', newItemRoutes);
router.use('/user', myUser)
router.use('/mystore', myStoreRoutes)

module.exports = router;
