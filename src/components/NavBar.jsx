import React, { useState } from 'react';

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
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">About</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
