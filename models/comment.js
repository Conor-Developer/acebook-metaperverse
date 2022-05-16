const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  commentMessage: { type: String, required: true }
  // later, think about likes
  // later, think about which post this comment is associated with
  // e.g. something like {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}, 
  // later, think about which user this comment is associate with
  // e.g. something like { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Comment  = mongoose.model("Comment", CommentSchema);

module.exports = Comment;