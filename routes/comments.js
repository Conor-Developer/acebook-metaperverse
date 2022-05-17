const express = require("express");
const router = express.Router();

const CommentController = require("../controllers/comments");

router.post("/id", CommentController.Create);


module.exports = router;