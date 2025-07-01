import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../components/Usercontext';
import logo from '../Images/Teamflicks.png';
import '../App.css';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
  const { currentUser, logout } = useUser();
  const navigate = useNavigate();
  const [_, forceUpdate] = useState(false);

  useEffect(() => {
    forceUpdate(f => !f);
  }, [currentUser]);

  return (
    <>
      <nav className="top-0 left-0 w-full bg-black text-white shadow-md z-50 sticky">
        <div className="container mx-auto flex justify-between items-center py-4">
          <img
            src={logo}
            alt="Teamflicks"
            width={150}
            height={150}
            className="object-contain cursor-pointer"
            onClick={() => navigate('/home')}
          />

          <ul className="flex space-x-8 text-lg font-medium whitespace-nowrap no-underline">
            {currentUser?.token && currentUser.username === 'Admin' && (
              <li className="hover:text-gray-400 cursor-pointer">
                <Link
                  to="/admin"
                  className="p-10 align-middle hover:bg-white hover:text-black hover:rounded-[35px] duration-500 ease-out"
                >
                  Admin
                </Link>
              </li>
            )}

            {currentUser?.token && (
              <>
                <li className="hover:text-gray-400 cursor-pointer">
                  <Link
                    to="/home"
                    className="p-10 align-middle hover:bg-white hover:text-black hover:rounded-[35px] duration-500 ease-out"
                  >
                    Home
                  </Link>
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                  <Link
                    to="/MoviesPage"
                    className="p-10 align-middle hover:bg-white hover:text-black hover:rounded-[35px] duration-500 ease-out"
                  >
                    Movies
                  </Link>
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                  <Link
                    to="/Subscription"
                    className="p-10 align-middle hover:bg-white hover:text-black hover:rounded-[35px] duration-500 ease-out"
                  >
                    Subscription
                  </Link>
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                  <span
                    onClick={() => { logout(); navigate('/'); }}
                    className="p-10 align-middle hover:bg-white hover:text-black hover:rounded-[35px] duration-500 ease-out"
                  >
                    Logout
                  </span>
                </li>
              </>
            )}

            {!currentUser?.token && (
              <li className="hover:text-gray-400 cursor-pointer">
                <Link
                  to="/"
                  className="p-10 align-middle hover:bg-white hover:text-black hover:rounded-[35px] duration-500 ease-out"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
