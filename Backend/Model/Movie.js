const mongoose = require('mongoose');

// Comment schema
const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true }
});

// Movie schema
const movieSchema = new mongoose.Schema({
  id: { type: Number, required: true }, 
  name: { type: String, required: true },
  description: { type: String, required: true },
  comments: [commentSchema],
  rating: { type: Number, },
  videoLink: { type: String, required: true },
  duration: { type: Number,},
  backgroundImage: { type: String, required: true }
});

// Genre schema (contains list of movies)
const genreSchema = new mongoose.Schema({
  genre: { type: String, required: true },
  movies: [movieSchema]
});

module.exports = mongoose.model('MovieCollection', genreSchema);
