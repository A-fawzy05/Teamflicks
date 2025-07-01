const express = require('express');
const { check, validationResult } = require('express-validator');
const MovieController = require('../Controller/MovieController');
const auth       = require('../Middleware/authMiddleware');
const isAdmin    = require('../Middleware/isAdmin');

const router = express.Router();

// Public read routes
router.get('/genres',        MovieController.getAllGenres);
router.get('/genres/:genre', MovieController.getMoviesByGenre);

// Only Admin can create genres
router.post(
  '/genres',
  auth,
  isAdmin,
  MovieController.createGenre
);


const movieValidation = [
  check('name').notEmpty().withMessage('Name is required'),
  check('description').notEmpty().withMessage('Description is required'),
  check('videoLink').isURL().withMessage('Must be a valid URL'),
  check('backgroundImage').isURL().withMessage('Must be a valid URL')
];

// Only Admin can add a movie
router.post(
  '/genres/:genre/movies',
  auth,
  isAdmin,
  movieValidation,
  (req, res, next) => {
    
    const errs = validationResult(req);
    if (!errs.isEmpty()) return res.status(400).json({ errors: errs.array() });
    next();
  },
  MovieController.addMovie
);

// Get single movie (anyone authenticated)
router.get(
  '/genres/:genre/movies/:movieId',
  auth,
  MovieController.getMovieById
);

// Only Admin can update or delete
router.put(
  '/genres/:genre/movies/:movieId',
  auth,
  isAdmin,
  MovieController.updateMovie
);

router.delete(
  '/genres/:genre/movies/:movieId',
  auth,
  isAdmin,
  MovieController.deleteMovie
);

// Add comment to a movie (anyone authenticated)
router.post(
  '/genres/:genre/movies/:movieId/comments',
  auth,
  MovieController.addComment
);

module.exports = router;