const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  post:[
    {type: Schema.Types.ObjectId, ref: 'Post'} 
  ]
 
   });


const Comment  = mongoose.model("Comment", CommentSchema);


module.exports = Comment;