const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const CommentSchema = new mongoose.Schema({
  comment: String,
  
  // { type: String, required: true },
  post:
    {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}, 
  user:
    { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
 
   });


const Comment  = mongoose.model("Comment", CommentSchema);


module.exports = Comment;