const router = require("express").Router();
const { myStore } = require("../../models");

// this post should be linked to the new listing button
// the market button should only take you to the market web page.
router.post("/", async (req, res) => {
  try {
    const newPost = await myStoreItemsrs.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    // neew to make a request to update the post.
    const edit = await newStoreItems.put({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!edit) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(edit);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const myPostData = await myStoreItems.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
