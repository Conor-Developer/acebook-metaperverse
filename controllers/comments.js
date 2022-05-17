const Comment = require("../models/comment");
// const Post = require("../models/posts");

const CommentController = {
  ReturnComments: () => {
    // console.log('res before Comment.find{})', res)
    Comment.find({})
    .exec(function (err, usercomments) {
      if (err) {
        throw err;
      }
      // console.log('res after Comment.find{}: ', res)
      // console.log('usercomments after Comment.find{}: ', usercomments)
      
      return usercomments // need to do something with res
      // res.render("comments/index", {post_id: req.params.id, post_comment:comment});
     });
    }, 

    // New: (req,res) => {
    //   res.render("comment/new", {post_id: req.params.id});
    // },
    
    Create: (req,res) => {
      const Info = {
        commentMessage: req.body.commentMessage,
        postId: req.params.id
      }
      // console.log(req.body)
      // console.log(req.params)
      // later, think about how to link a new comment with the post it is a comment on
      const comment = new Comment(Info);
      comment.save((err) => {
        if (err) {
          throw err;
        }

        res.status(201).redirect("/posts");
      });
    },
};

module.exports = CommentController;