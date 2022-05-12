const Post = require("../models/post");

const PostsController = {
  Index: (req, res) => {
    Post.find({})
      .sort({ _id: -1 })
      .exec(function (err, userposts) {
        if (err) {
          throw err;
        }

        res.render("posts/index", { posts: userposts });
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

  //   db.Post.updateOne(
  //     { item: "paper" },
  //     {
  //       $set: { "size.uom": "cm", status: "P" },
  //       $currentDate: { lastModified: true }
  //     }
  //  )

  //   }
};

module.exports = PostsController;
