const express = require("express");
const router = express.Router();

const CommentController = require("../controllers/comment");

router.get("/:id", CommentController.Index);
router.get("/:id/new", CommentController.New);
router.post("/:id", CommentController.Create);


module.exports = router;