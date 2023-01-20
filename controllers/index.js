const router = require('express').Router();
const apiRoutes = require('./api');
const myStoreItemsRoutes= require('./myStoreItemsRoutes.js')




router.use('/', myStoreItemsRoutes);
router.use('/api', apiRoutes);


module.exports = router;
