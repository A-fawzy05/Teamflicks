import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useMovies } from '../components/MoviesContext.jsx';
import toast from 'react-hot-toast';

const RemoveMovie = () => {
  const { moviesData, deleteMovie } = useMovies();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const allMovies = moviesData.flatMap(g =>
    g.movies.map(m => ({ ...m, genre: g.genre }))
  );

  const handleDelete = async () => {
    if (!selectedMovie) return;
    setLoading(true);
    try {
      await deleteMovie(selectedMovie.genre, selectedMovie._id);
      toast.success('Movie deleted successfully');
      setSelectedMovie(null);
    } catch (error) {
      toast.error('Failed to delete movie');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-gray-900 text-white p-6 rounded-2xl">
      <Autocomplete
        disablePortal
        options={allMovies}
        getOptionLabel={option => option.name}
        sx={{ width: 300, backgroundColor: 'white' }}
        renderInput={params => <TextField {...params} label="Search Movie to Remove" />}
        onChange={(e, newValue) => setSelectedMovie(newValue)}
      />

      {selectedMovie && (
        <div className="bg-red-800 p-4 rounded-xl text-center max-w-md w-full mt-4">
          <p className="text-lg font-semibold mb-4">Delete {selectedMovie.name}?</p>
          <div className="flex justify-center gap-4">
            <Button variant="contained" color="error" onClick={handleDelete} disabled={loading}>
              {loading ? 'Deleting...' : 'Confirm Delete'}
            </Button>
            <Button variant="outlined" color="inherit" onClick={() => setSelectedMovie(null)}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoveMovie;