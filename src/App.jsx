import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from "react";
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Support from "./pages/Support.jsx";
import Home from "./pages/Home.jsx";
import MoviesPage from './pages/MoviesPage.jsx';
import Admin from './pages/Admin.jsx';
import MoviePage from './pages/Movie.jsx';
import Subscription from './pages/Subscription.jsx';
import backgroundImage from "./assets/LoginBackground.png";
import Showpage from './pages/Showpage.jsx';
import MainLayout from './components/MainLayout.jsx';
import Newmovie from './components/newmovie.jsx';
import toast, { Toaster } from 'react-hot-toast';
import { UserProvider } from "./components/Usercontext.jsx";
import Adminfunctions from './components/Adminfunctions.jsx';
import Editmovie from './components/Editmovie.jsx';
import RemoveMovie from './components/RemoveMovie.jsx';
import { MovieProvider } from './components/MoviesContext.jsx';
import api from './api';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  const appStyleSupport = {
    backgroundColor: "#1e1e1e",
    minHeight: "100vh",
    width: "100vw",
    display: "block", // No flex, just block for the support page
    color: "white",
    padding: "20px",
  };
  useEffect(() => {
    const checkAuth = async () => {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      if (user?.token) {
        try {
          // Verify token validity on initial load
          await api.get('/users/me'); // You'll need to create this endpoint in your backend
        } catch (error) {
          localStorage.removeItem('currentUser');
          window.location = '/login';
        }
      }
    };
    checkAuth();
  }, []);

  return (
   <MovieProvider>
    <UserProvider>
    <Router>
    <Routes>

      {/* Auth pages */}
      <Route path="/" element={showLogin ? <Login setShowLogin={setShowLogin} /> : <SignUp setShowLogin={setShowLogin} />} />

      {/* Main layout pages (with shared layout like navbar/footer) */}
      <Route element={<MainLayout/>}>
        <Route path="/home" element={<Home />} />
        <Route path="/MoviesPage" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<MoviePage  />}/>
            <Route path="/movie/:id/:id" element={<Showpage />} /> 
        <Route element={<Admin/>}>
          <Route path="/admin/add-movie" element={<Newmovie />} />
          <Route path="/admin/edit-movie" element={<Editmovie />} />
          <Route path="/admin/delete-movie" element={<RemoveMovie />} />
      </Route>
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/support" element={<Support />} />
      </Route>

      
      
      <Route path="/support" element={<Support />} />

    </Routes>
  
</Router>
</UserProvider>
</MovieProvider>
  );
};

export default App;


