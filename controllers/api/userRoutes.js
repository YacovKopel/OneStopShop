const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

      // req.session.save(() => {
      //   req.session.user_id = userData.id;
      //   req.session.logged_in = true;
  
        res.status(200).json(dbUserData);
      // });
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

  module.exports = router;