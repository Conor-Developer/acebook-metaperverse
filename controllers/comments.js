const Comment = require("../models/comment");
const Post = require("../models/post");

const CommentController = {
  ReturnComments: () => {
    // console.log('res before Comment.find{})', res)
    Comment.find({}).exec(function (err, usercomments) {
      if (err) {
        throw err;
      }
      // console.log('res after Comment.find{}: ', res)
      // console.log('usercomments after Comment.find{}: ', usercomments)

      return usercomments; // need to do something with res
      // res.render("comments/index", {post_id: req.params.id, post_comment:comment});
    });
  },

  // New: (req,res) => {
  //   res.render("comment/new", {post_id: req.params.id});
  // },

  fetchCommentsOfPosts: (givenPostId) => {
    Comment.find({ postId: givenPostId }).exec(function (err, postComments) {
      if (err) {
        throw err;
      }

      return postComments;
    });
  },

  Create: (req, res) => {
    Post.findByIdAndUpdate(
      req.params.id,
      { comments: req.body.commentText },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log("Updated Comment:", docs);
        }
      }
    );

    // const Info = {
    //   commentMessage: req.body.commentText,
    //   postId: req.params.id,
    // };

    // Post.findById(req.params.id, function (err, docs) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     let comment = req.body.commentText;
    //     // console.log("docs.comments : ", docs.comments);
    //     Post.updateOne({ id: req.params.id }, { $set: { comments: comment } });
    //   }
    // });

    // now we need to save the updated post back into the database

    // console.log(req.body)
    // console.log(req.params)
    // later, think about how to link a new comment with the post it is a comment on
    // const comment = new Comment(Info);
    // comment.save((err) => {
    //   if (err) {
    //     throw err;
    //   }

    res.status(201).redirect("/posts");
    //   });
  },
};

module.exports = CommentController;
