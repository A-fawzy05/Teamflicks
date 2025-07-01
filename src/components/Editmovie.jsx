import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { useMovies } from '../components/MoviesContext.jsx';
import toast from 'react-hot-toast';

const Editmovie = () => {
  const { moviesData, updateMovie, deleteMovie, addMovie } = useMovies();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editableMovie, setEditableMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  // flatten movies with genre
  const allMovies = moviesData.flatMap(g =>
    g.movies.map(m => ({ ...m, genre: g.genre }))
  );

  const handleSave = async () => {
    if (!editableMovie || !selectedMovie) return;
    setLoading(true);
    try {
      // if ID changed, delete & recreate
      if (editableMovie.id !== selectedMovie.id) {
        await deleteMovie(selectedMovie.genre, selectedMovie._id);
        await addMovie(editableMovie.genre, {
          id: editableMovie.id,
          name: editableMovie.name,
          description: editableMovie.description,
          videoLink: editableMovie.videoLink,
          backgroundImage: editableMovie.backgroundImage,
          rating: editableMovie.rating ?? 0,
          duration: editableMovie.duration ?? 0,
          comments: editableMovie.comments || []
        });
      } else {
        await updateMovie(
          selectedMovie.genre,
          selectedMovie._id,
          editableMovie
        );
      }
      toast.success('Movie updated successfully');
      setSelectedMovie(null);
      setEditableMovie(null);
    } catch (error) {
      toast.error('Failed to update movie');
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
        renderInput={params => <TextField {...params} label="Movie" />}
        onChange={(e, newValue) => {
          setSelectedMovie(newValue);
          setEditableMovie(newValue ? { ...newValue } : null);
        }}
      />

      {selectedMovie && (
        <div className="flex flex-col gap-4 w-full max-w-md bg-gray-800 p-4 rounded-xl mt-4">
          {['name', 'description', 'videoLink', 'backgroundImage'].map(field => (
            <div key={field} className="mb-4">
              <label className="block text-sm font-medium mb-1 capitalize">
                {field.replace(/([A-Z])/g, ' $1')}:
              </label>
              <TextField
                fullWidth
                variant="outlined"
                value={editableMovie[field] || ''}
                onChange={e => setEditableMovie({
                  ...editableMovie,
                  [field]: e.target.value
                })}
                InputProps={{ style: { color: 'white' }, className: 'bg-gray-700 rounded' }}
              />
            </div>
          ))}

          <Button variant="contained" color="success" onClick={handleSave} disabled={loading}>
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Editmovie;