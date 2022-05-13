const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const CommentSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  post:[
    {type: Schema.Types.ObjectId, ref: 'Post'} 
  ]
 
   });


const Comment  = mongoose.model("Comment", CommentSchema);


module.exports = Comment;