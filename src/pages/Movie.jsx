import React, { useRef, useState, useEffect } from "react";
import '../Home_movie.css';
import P from '../assets/P.jpeg';
import R from '../assets/R.jpeg';
import A from '../assets/A.jpeg';
import I from '../assets/I.jpeg';
import M from '../assets/M.jpeg';
import M1 from '../assets/M1.jpeg';
import essam from '../assets/essam.jpeg';
import Ahmed from '../assets/Ahmed.jpeg';
import Mohammed from '../assets/Mohammed.jpeg';
import omar from '../assets/omar.jpeg';
import footer from '../assets/footer.png';
import { useParams, Link } from 'react-router-dom';
import { useMovies } from '../components/MoviesContext.jsx';

const Moviepage = () => {
  const { id } = useParams();
  const { moviesData, loading } = useMovies();
  

  // show loading state
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Find the movie by its numeric `id` field
  const movie = moviesData
    .flatMap(category => category.movies)
    .find(m => m.id === Number(id));

  if (!movie) {
    return <div className="not-found">Movie not found</div>;
  }

  // Derive genre and MongoDB _id for API calls
  const genre = moviesData.find(cat =>
    cat.movies.some(m => m.id === Number(id))
  )?.genre;
  const movieId = movie._id;

  // Slideshow setup
  const sliderRef = useRef(null);
  const images = [M, P, R, A, I, M1, omar, essam, Ahmed, Mohammed];
  const scroll = direction => {
    if (sliderRef.current) {
      const amount = 150;
      sliderRef.current.scrollLeft += direction === "left" ? -amount : amount;
    }
  };

  // Review form state
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', location: '', text: '', rating: '' });
  const [comments, setComments] = useState(movie.comments);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addReview = async () => {
    const { name, text } = form;
    if (!name || !text) {
      alert('Please fill in all fields.');
      return;
    }
    // Call the backend to add a comment
    const success = await addComment(genre, movieId, { name, comment: text });
    if (success) {
      setComments(prev => [...prev, { name, comment: text }]);
      setForm({ name: '', location: '', text: '', rating: '' });
      setShowForm(false);
    } else {
      alert('Failed to submit review.');
    }
  };

  return (
    <><><><>
    
    
            <div className="photo">  <img className='photo1' src={movie.backgroundImage} alt="" />
              <div className='MA'> {movie.name} <div/>
    <div className="play2">  <button class="play "><Link to={`/movie/${movie.id}/${movie.id}`} key={movie.id}>
                    Play</Link></button></div>
    
       </div>
            </div></><div className="Dis">
              
              <div className="long"> {movie.description}</div>
    
            </div><div className="slideshow-container">
              <div className="Cast"> Cast</div>
              <div className="slideshow">
                {/* Left Button */}
                <button className="prev" onClick={() => scroll("left")}>&#10094;</button>
    
                {/* Scrollable Images Container */}
                <div className="myslide" ref={sliderRef}>
                  {images.map((image, index) => (
                    <img key={index} src={image} alt={`Actor ${index + 1}`} className="slide-image" />
                  ))}
                </div>
    
                {/* Right Button */}
                <button className="next" onClick={() => scroll("right")}>&#10095;</button>
              </div>
            </div><div className="star">
            <div className="review-app">
                <h1>Reviews</h1>
                <button onClick={() => setShowForm(true)}>Add Your Review</button>
    
                {showForm && (
                    <div className="add-review">
                        <h2>Add Your Review</h2>
                        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                        <input type="text" name="location" placeholder="Your Location" value={form.location} onChange={handleChange} required />
                        <textarea name="text" placeholder="Your Review" value={form.text} onChange={handleChange} required />
                        <input type="number" name="rating" placeholder="Rating (0-5)" min="0" max="5" step="0.1" value={form.rating} onChange={handleChange} required />
                        <button onClick={addReview}>Submit Review</button>
                    </div>
                )}
            </div>
              <div className="reco">
                <div className="small1">Mariam Lotfy</div>
                <div className="small2">from Egypt</div>
                <div className="big">  this movie is the best movie i had ever seen i will give it 5 stars</div>
                <span>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
               
              </div>
    
            </div></>
          </><div class="sidebar">
            
          <div className="clander"><i class="fa-solid fa-calendar"> </i> Releasedyear</div>
          <p className="po"> 2022</p>
          <div className="star1"><i class="fa-solid fa-star"></i>Rtaings</div>
          <div className="reco1">
          <div className="reco2">
                <div className="small1"> </div>
                <div className="small2"></div>
                <div className="big">  </div>
                <span className="to">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <div className="no"> StreamVibe</div>
                </span>
                </div>
                <div className="reco3">
                <div className="small1"></div>
                <div className="small2"></div>
                <div className="big"></div>
                <span className="to">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <div className="yes">IMDb</div>
                </span>
                
                </div>
                <div className="director">
                  <div className="d1" >Director</div>
    
      <div className="roro">Rishab shetty</div>
      <div className="roro1">From india</div>
    <img className='roro2' src={Mohammed} alt="" />
    
    
    
    
    </div>
    <div className="director">
                  <div className="d1" >Music</div>
    
      <div className="roro">B.Lolnath</div>
      <div className="roro1">From india</div>
    <img className='roro2' src={Ahmed} alt="" >
    
    </img>
    </div>
                </div>
    
    </div>
              
    
    
    
    
    <div className='image33'>
            <div className="img3">
              <img className='footer' src={footer} alt="" /></div>
            <div className='text100'> Start your free trial today! <div />
    
              <div className='text1001'> this is clear and concise call to action that encourages users to sign up for afree trial of StreamVibe.</div>
              <div class="buttons2">
                <button class="free-trial7">Start Free Trial</button>
              </div>
              </div>
              </div>
    
     </>
      
          
  );
};

export default Moviepage;