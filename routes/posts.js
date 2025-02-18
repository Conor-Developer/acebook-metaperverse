const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.Index);
router.post("/", PostsController.Create);
router.post("/:id/likes", PostsController.UpdateLikes);
router.delete("/:id", PostsController.Delete);

module.exports = router;
