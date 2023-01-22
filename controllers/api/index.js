const router = require('express').Router();
const marketplaceRoutes = require('./marketplaceRoutes');
const newItemRoutes = require('./newItemRoutes');
const myStore=require('./userRoutes')


// Change later to fit our models
router.use('/marketplace',marketplaceRoutes);
router.use('/newItem', newItemRoutes);
router.use('/user', myStore)

module.exports = router;
