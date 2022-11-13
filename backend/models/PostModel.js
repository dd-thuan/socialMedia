const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userId: { type: String, },
  desc: String,
  likes: [],
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },



},
  { timestamps: true }
);


module.exports = mongoose.model('Posts', postSchema);

