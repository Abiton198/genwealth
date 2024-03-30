import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 py-4">
      <div className="container mx-auto px-4 md:px-0 flex justify-between items-center">
        <div className="text-white font-semibold text-lg md:text-xl">
          GenWealth <br />
          <p className='text-xs italic'>Creating a better tomorrow, today!</p>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-100 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/About" className="text-white hover:text-gray-300 transition duration-300">About</Link>
          <Link to="/Intro" className="text-white hover:text-gray-300 transition duration-300">Intro</Link>
          <Link to="/Testimonies" className="text-white hover:text-gray-300 transition duration-300">Testimonies</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
