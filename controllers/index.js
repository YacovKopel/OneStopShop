const router = require('express').Router();
const apiRoutes = require('./api');
const myStoreItemsRoutes= require('./myStoreItemsRoutes')

router.use('/api', apiRoutes);
router.use('/', myStoreItemsRoutes);


module.exports = router;
