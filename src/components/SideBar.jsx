import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { slide as Menu } from 'react-burger-menu';
import logo from '../img/logo.jpeg';

const Sidebar = () => {
  
  return (
    <div>
     {/* <nav className="bg-blue-900 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 justify-self-end">
            <div className="flex items-center space-x-3 rtl:space-x-reverse justify-between w-full">
            
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-8" alt="GW" />
                <span className="justify-self-end text-2xl font-semibold whitespace-nowrap dark:text-white">GenWealth</span>
            </Link>
           
            </div>
        </div>
        </nav> */}


      <Menu width={'80%'} >
        <Link id="home" className="menu-item" to="/">Home</Link>
        <Link id="about" className="menu-item" to="/About">About</Link>
        <Link id="intro" className="menu-item" to="/Intro">Intro</Link>
        <Link id="Questions" className="menu-item" to="/Questions">Questions</Link>
        <Link id="Testimonies" className="menu-item" to="/Testimonies">Testimonies</Link>
        <Link id="SignUp" className="menu-item" to="/SignUp">Sign-Up</Link>
      </Menu>
    </div>
  );
};

export default Sidebar;
