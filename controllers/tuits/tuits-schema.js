import mongoose from 'mongoose';

const schema = mongoose.Schema({
  username: String,
  time: String,
  image: String,
  title: String,
  tuit: String,
  likes: Number,
  liked: Boolean,
  disliked: Boolean,
  dislikes: Number,
  replies: Number,
  retuits: Number
}, {collection: 'tuits'});
export default schema;

