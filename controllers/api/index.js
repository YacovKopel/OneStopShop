const router = require('express').Router();
const newItemRoutes = require('./newItemRoutes');
const myUser=require('./userRoutes')
const myStoreRoutes=require('./myStoreItemsRoutes')


router.use('/newItem', newItemRoutes);
router.use('/user', myUser)
router.use('/mystore', myStoreRoutes)

module.exports = router;
