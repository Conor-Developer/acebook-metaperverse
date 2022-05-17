const Post = require("../models/post");
const CommentsController = require("./comments");

const PostsController = {
  Index: (req, res) => {
    Post.find({})
      .populate({ path: 'user', select: 'username' })
      .sort({ _id: -1 })
      .exec(function (err, userposts) {
        if (err) {
          throw err;
        }
        // console.log('CommentsController: ', CommentsController)
        // console.log('CommentsController.ReturnComments: ', CommentsController.ReturnComments)
        // console.log('CommentsController.ReturnComments(req, res): ', CommentsController.ReturnComments(req, res))
        let usercomments = CommentsController.ReturnComments(req, res);
        // console.log('usercomments returning from CommentController.ReturnComments(): ', usercomments)
        res.render("posts/index", {
          posts: userposts,
          user: req.session.user,
          comments: usercomments
        });
      });
  },
  Create: (req, res) => {
    const Info = {
      message: req.body.message,
      createdAt: req.body.createdAt,
      user: req.session.user._id
    }
    const post = new Post(Info);
    post.save((err) => {
      if (err) {
        throw err;
      }

      res.status(201).redirect("/posts");
    });
  },
  UpdateLikes: (req, res) => {
    const action = req.body.action;
    const counter = action === "Like" ? 1 : -1;
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
