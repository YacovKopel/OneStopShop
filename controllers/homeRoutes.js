const router = require('express').Router();
const { User, Product } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/newItem', async (req, res) => {
  try {
    res.render('newitem');
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/mystore', async (req, res) => {
  try {

    res.render('mystore');
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/marketplace', async (req, res) => {
  try {

    res.render('marketplace');
  } catch (err) {
    res.status(400).json(err);
  }
});
// router.delete('/:id', async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
