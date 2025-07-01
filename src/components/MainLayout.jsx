import React from 'react';
import Navbar from './navbar.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';
import { useUser } from "./Usercontext.jsx";

const MainLayout = () => {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <Navbar currentuser = {user}/>


      <main>
        <Outlet currentuser = {user}/>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
