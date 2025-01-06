const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: String,
  duration: Number,
  url: String,
  coverImage: String
});

module.exports = mongoose.model('Song', SongSchema);
