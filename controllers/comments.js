const Post = require("../models/post");

const CommentController = {
  Create: (req, res) => {
    Post.findByIdAndUpdate(
      req.params.id,
      { $push: { comments: req.body.commentText } },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Comment:", docs);
        }
      }
    );
    res.status(201).redirect("/posts");
  },
};

module.exports = CommentController;
