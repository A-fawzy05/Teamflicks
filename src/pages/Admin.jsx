import '../App.css'
import Adminfunctions from '../components/Adminfunctions.jsx';
import Newmovie from '../components/newmovie.jsx';
import Editmovie from '../components/Editmovie.jsx';
import { Outlet } from 'react-router-dom';
 const Admin = () => {
    return (
        
        <div className='min-h-[70rem] flex flex-col justify-center flex-nowrap pt-2 p-8 mt-20 mb-18 w-full bg-neutral-800 h-dvh m-0 text-center border-r-amber-50 border-4 rounded-4xl inset-0'>
        <h1 className='mt-3 sm:text-2xl font-bold text-nowrap '>Welcome, Admin</h1>
        <Adminfunctions/>
        <Outlet/>
        </div>
        
      )
}

export default Admin;