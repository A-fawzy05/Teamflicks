import React, { createContext, useState, useContext, useEffect } from "react";
import api from '../api';

const MovieContext = createContext();
export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all genres and their movies
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/movies/genres');
      setMoviesData(data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  // Admin-only: add a movie under a genre
  const addMovie = async (genre, movieData) => {
    try {
      const { data } = await api.post(`/movies/genres/${genre}/movies`, movieData);
      setMoviesData(prev => 
        prev.map(g => g.genre === genre
          ? { ...g, movies: [...g.movies, data] }
          : g
        )
      );
      return true;
    } catch (err) {
      console.error('Add movie error:', err.response?.data || err.message);
      return false;
    }
  };

  // Admin-only: update an existing movie
  const updateMovie = async (genre, movieId, updatedData) => {
    try {
      const { data } = await api.put(`/movies/genres/${genre}/movies/${movieId}`, updatedData);
      setMoviesData(prev => 
        prev.map(g => g.genre === genre
          ? { 
              ...g,
              movies: g.movies.map(m => m._id === movieId ? data : m)
            }
          : g
        )
      );
      return true;
    } catch (err) {
      console.error('Update movie error:', err.response?.data || err.message);
      return false;
    }
  };

  // Admin-only: delete a movie
  const deleteMovie = async (genre, movieId) => {
    try {
      await api.delete(`/movies/genres/${genre}/movies/${movieId}`);
      setMoviesData(prev => 
        prev.map(g => g.genre === genre
          ? { ...g, movies: g.movies.filter(m => m._id !== movieId) }
          : g
        )
      );
      return true;
    } catch (err) {
      console.error('Delete movie error:', err.response?.data || err.message);
      return false;
    }
  };

  const addComment = async (genre, movieId, comment) => {
    try {
      const { data } = await api.post(`/movies/genres/${genre}/movies/${movieId}/comments`, comment);
      setMoviesData(prev => 
        prev.map(g => g.genre === genre
          ? {
              ...g,
              movies: g.movies.map(m => {
                if (m._id === movieId) {
                  return { ...m, comments: data };
                }
                return m;
              })
            }
          : g
        )
      );
      return true;
    } catch (err) {
      console.error('Add comment error:', err.response?.data || err.message);
      return false;
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ 
      moviesData, 
      loading,
      error,
      fetchMovies,
      addMovie,
      updateMovie,
      deleteMovie,
      addComment
    }}>
      {children}
    </MovieContext.Provider>
  );
};