let comment = {
  commentMessage: String,
  post: {
    message: ...
    likes: ...
  }
}

let post = {
  message: String,
  likes: Number,
  comments: [
    comment1: {

    },
    comment2: {

    },
    comment3: {

    }
  ]
}

const PostSchema = new mongoose.Schema({
  message: String,
  likes: Number,
  // posted_by: String,
  comments: Array,
  // user: { type: mongoose.Schema.Types.ObjectId, ref: ‘User’ }