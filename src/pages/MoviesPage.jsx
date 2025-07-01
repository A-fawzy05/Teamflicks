import MovieCard from "../components/MovieCard.jsx";
import SwiperSlider from "../components/SwiperSlide.jsx";
import { motion } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useUser } from "../components/Usercontext.jsx";
import { useMovies } from "../components/MoviesContext.jsx";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner.jsx"; // Create this component
import toast from "react-hot-toast";

function MoviesPage() {
  const { moviesData, loading, error } = useMovies();
  const { currentUser } = useUser();
  const location = useLocation();
  const scrollToGenre = location.state?.scrollTo;

  // Prepare genre refs
  const genres = useMemo(() => ['Exclusive', ...moviesData.map(c => c.genre)], [moviesData]);
  const refs = useRef(genres.reduce((acc, g) => ({ ...acc, [g]: null }), {}));

  // Handle errors
  useEffect(() => {
    if (error) {
      toast.error("Failed to load movies");
    }
  }, [error]);

  // Scroll on navigation
  useEffect(() => {
    if (scrollToGenre && refs.current[scrollToGenre]) {
      refs.current[scrollToGenre].scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToGenre, moviesData]);

  // Process movies data
  const exclusiveMovies = useMemo(() => 
    moviesData.flatMap(c => c.movies)
      .filter(m => m.rating >= 9)
      .sort((a, b) => b.rating - a.rating),
    [moviesData]
  );

  const filteredGenres = useMemo(() => 
    moviesData
      .map(c => ({ 
        genre: c.genre, 
        movies: c.movies
          .filter(m => m.rating < 9)
          .sort((a, b) => b.rating - a.rating)
      }))
      .filter(c => c.movies.length > 0),
    [moviesData]
  );

  // Section wrapper with optional animation
  const Section = ({ genre, className, children }) => {
    const isTarget = scrollToGenre === genre;
    const Tag = isTarget ? motion.div : 'div';
    const props = isTarget ? { 
      initial: { opacity: 0, y: 50 }, 
      animate: { opacity: 1, y: 0 }, 
      transition: { duration: 0.5 } 
    } : {};
    
    return (
      <Tag
        ref={el => (refs.current[genre] = el)}
        className={className}
        {...props}
      >
        {children}
      </Tag>
    );
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center mt-20">Error loading movies</div>;

  return (
    <>
      {/* Banner */}
      <div className="bg-gray-900 pb-14 pt-20 mt-15">
        <h1 className="text-white font-bold text-6xl text-center">Explore Famous Movies</h1>
        <SwiperSlider movies={moviesData.flatMap(g => g.movies).slice(0, 5)} />
      </div>

      <div className="mt-20 space-y-12 px-4">
        {/* Exclusive Section */}
        {exclusiveMovies.length > 0 && (
          <Section
            genre="Exclusive"
            className={`bg-gray-700 p-6 rounded-2xl shadow-md relative overflow-hidden ${
              currentUser?.subscription === 'none' ? 'opacity-100 pointer-events-none' : ''
            }`}
          >
            <h2 className="text-3xl font-semibold mb-6 text-center text-white">Exclusive</h2>
            <div className="flex flex-nowrap gap-6 justify-center">
              {exclusiveMovies.map(movie => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <MovieCard movie={movie} w={150} h={300} />
                </Link>
              ))}
            </div>
            {currentUser?.subscription === 'none' && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60">
                <p className="text-white text-xl font-semibold text-center">
                  Subscribe to see the exclusives
                </p>
              </div>
            )}
          </Section>
        )}

        {/* Genre Sections */}
        {filteredGenres.map(({ genre, movies }) => (
          <Section key={genre} genre={genre} className="bg-gray-700 p-6 rounded-2xl shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-center text-white">{genre}</h2>
            <motion.div 
              initial={{ opacity: 0, y: 120 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="flex flex-wrap gap-6 justify-center">
                {movies.map(movie => (
                  <Link to={`/movie/${movie.id}`} key={movie.id}>
                    <MovieCard movie={movie} w={150} h={300} />
                  </Link>
                ))}
              </div>
            </motion.div>
          </Section>
        ))}
      </div>
    </>
  );
}

export default MoviesPage;