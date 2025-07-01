const MovieCollection = require('../Model/Movie');

const getAllGenres = async (req, res) => {
  try {
    const genres = await MovieCollection.find();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMoviesByGenre = async (req, res) => {
  try {
    const genreData = await MovieCollection.findOne({ genre: req.params.genre });
    if (!genreData) return res.status(404).json({ message: 'Genre not found' });
    res.json(genreData.movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addMovie = async (req, res) => {
  try {
    console.log("Adding movie to genre:", req.params.genre);
    let genre = await MovieCollection.findOne({ genre: req.params.genre });

    if (!genre) {
      genre = new MovieCollection({
        genre: req.params.genre,
        movies: [req.body]
      });
    } else {
      genre.movies.push(req.body);
    }

    const savedGenre = await genre.save();
    res.status(201).json(savedGenre.movies[savedGenre.movies.length - 1]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    const genre = await MovieCollection.findOne({ genre: req.params.genre });
    if (!genre) return res.status(404).json({ message: 'Genre not found' });

    const movie = genre.movies.id(req.params.movieId);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const genre = await MovieCollection.findOne({ genre: req.params.genre });
    if (!genre) return res.status(404).json({ message: 'Genre not found' });

    const movie = genre.movies.id(req.params.movieId);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    movie.set(req.body);
    const updatedGenre = await genre.save();

    res.json(updatedGenre.movies.id(req.params.movieId));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { genre, movieId } = req.params;

    
    const result = await MovieCollection.updateOne(
      { genre },
      { $pull: { movies: { _id: movieId } } }
    );

    
    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: 'Movie not found or already deleted' });
    }

    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    console.error('Delete movie error:', error);
    res.status(500).json({ message: error.message });
  }
};

const addComment = async (req, res) => {
  try {
    const genre = await MovieCollection.findOne({ genre: req.params.genre });
    if (!genre) return res.status(404).json({ message: 'Genre not found' });

    const movie = genre.movies.id(req.params.movieId);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    movie.comments.push({
      name: req.body.name,
      comment: req.body.comment
    });

    const updatedGenre = await genre.save();
    const updatedMovie = updatedGenre.movies.id(req.params.movieId);

    res.status(201).json(updatedMovie.comments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const createGenre = async (req, res) => {
  try {
    const { genre } = req.body;
    if (!genre) {
      return res.status(400).json({ message: 'Missing genre name in request body' });
    }

    // Check for duplicate
    const existing = await MovieCollection.findOne({ genre });
    if (existing) {
      return res.status(409).json({ message: 'Genre already exists' });
    }

    // Create an empty genre document
    const newGenre = new MovieCollection({ genre, movies: [] });
    await newGenre.save();

    res.status(201).json(newGenre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteGenre = async (req, res) => {
  try {
    const { genre } = req.params;
    const deleted = await MovieCollection.findOneAndDelete({ genre });
    if (!deleted) {
      return res.status(404).json({ message: `Genre '${genre}' not found` });
    }
    res.json({ message: `Genre '${genre}' and all its movies have been deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllGenres,
  getMoviesByGenre,
  addMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
  addComment,
  createGenre,
  deleteGenre    
};
