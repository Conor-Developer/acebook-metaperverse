const Comment = require("../models/comment");

const CommentController = {
  Index: (req, res) => {
    var post_id = req.id;
     Comment.find({ postId: post_id }).exec(function (err, comment) {
      res.render("comments/index", {post_id: req.params.id, post_comment:comment});
     });
    }, 


    New: (req,res) => {
      res.render("comment/new", {post_id: req.params.id});
    },

    Create: (req,res) => {
      var post_id = req;
      var comment_body = req.body.comment;
      var new_comment = new Comment({comment:comment_body, postId: post_id});
      new_comment.save();
      res.redirct('/posts');
    }

};

module.exports = CommentController;