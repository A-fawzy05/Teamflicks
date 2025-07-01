import React from "react";
import { useParams } from 'react-router-dom';
import { useMovies } from '../components/MoviesContext.jsx';
import backgroundImage from "../assets/LoginBackground.png";

const Showpage = () => {
  const { id } = useParams();
  const { moviesData } = useMovies();

  // Find movie by 'id' (number), not '_id'
  const movie = moviesData
    .flatMap(category => category.movies)
    .find(m => m.id === Number(id));

  // Optional: find genre (if needed)
  const genre = moviesData.find(cat =>
    cat.movies.some(m => m.id === Number(id))
  )?.genre;

  // Get Mongo _id if needed
  const movieId = movie?._id;

  const getYoutubeId = (url) => {
    try {
      const u = new URL(url);
      if (u.hostname === "youtu.be") {
        return u.pathname.slice(1).split("?")[0];
      }
      const params = new URLSearchParams(u.search);
      return params.get("v");
    } catch {
      return null;
    }
  };

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <p className="text-white text-xl">Movie not found</p>
      </div>
    );
  }

  const videoId = getYoutubeId(movie.videoLink);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;

  return (
    <div className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="max-w-4xl mx-auto py-8 px-4 bg-black/50 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">{movie.name}</h1>

        <div className="bg-gray-900 rounded-2xl overflow-hidden mb-8 relative shadow-lg">
          {embedUrl ? (
            <iframe
              className="w-full aspect-video"
              src={embedUrl}
              title={movie.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                     gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-8">
              <p className="text-red-500">Video not available</p>
            </div>
          )}
        </div>

        <div className="bg-gray-800 bg-opacity-80 p-6 rounded-2xl space-y-4">
          <p className="text-lg">{movie.description}</p>
          <div className="flex flex-wrap gap-4">
            <span><strong>Rating:</strong> {movie.rating}/10</span>
            <span><strong>Duration:</strong> {movie.duration} mins</span>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <div className="space-y-3">
              {movie.comments.map((c, i) => (
                <div key={i} className="bg-gray-700 p-4 rounded-lg">
                  <p className="font-semibold">{c.name}</p>
                  <p className="italic">{c.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showpage;
