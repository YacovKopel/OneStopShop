const router = require("express").Router();
const { Marketplace } = require("../../models");

// marketplace sould only have a get router.get('/'async)
// and a login requirment

router.get("/", async (req, res) => {
  try {
      res.render(200).json('Marketplace');
    
  }catch (err) {
    res.status(400).json(err);
  }})

module.exports = router; 
