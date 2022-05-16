const Post = require("../models/post");
const CommentsController = require("./comments");

const PostsController = {
  Index: (req, res) => {
    Post.find({})
      .sort({ _id: -1 })
      .exec(function (err, userposts) {
        if (err) {
          throw err;
        }
        console.log('CommentsController: ', CommentsController)
        console.log('CommentsController.ReturnComments: ', CommentsController.ReturnComments)
        console.log('CommentsController.ReturnComments(req, res): ', CommentsController.ReturnComments(req, res))
        let usercomments = CommentsController.ReturnComments(req, res);
        console.log('usercomments returning from CommentController.ReturnComments(): ', usercomments)
        res.render("posts/index", { posts: userposts, comments: usercomments });
      });
  },
  New: (req, res) => {
    res.render("posts/new", {});
  },
  Create: (req, res) => {
    const post = new Post(req.body);
    post.save((err) => {
      if (err) {
        throw err;
      }

      res.status(201).redirect("/posts");
    });
  },
  UpdateLikes: (req, res) => {
    console.log("Update likes in controller");
    console.log(req.params.id);
    const action = req.body.action;
    const counter = (action === "Like" ? 1 : -1);
    Post.updateOne(
      { _id: req.params.id },
      { $inc: { likes: counter } },
      {},
      (err, number) => {
        if (err) {
          throw err;
        }
        res.send(number);
      }
    );
  },
};

module.exports = PostsController;
