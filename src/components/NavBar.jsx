import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// Navigation Bar Component
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-600 py-4">
      <div className="flex justify-between items-center px-4">
        <div className="text-white font-semibold text-lg md:text-xl">GenWealth</div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-100 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          {/* Your navigation links go here */}
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/About" className="text-white hover:text-gray-300 transition duration-300">About</Link>
          {/* Change the "to" prop to the appropriate route for your About page */}
          <Link to="/Intro" className="text-white hover:text-gray-300 transition duration-300">Intro</Link>
          <Link to="/Testimonies" className="text-white hover:text-gray-300 transition duration-300">Testimonies</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
