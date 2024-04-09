import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (itemId) => {
    // Close the menu when an item is clicked
    setIsOpen(false);
    // Set the clicked item
    setClickedItem(itemId);
  };

  const handleMenuClick = () => {
    // Close the menu when clicked
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand flex">
        <Link to="/" className="navbar-logo text-white"></Link>
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-icon">&#9776;</span>
        </button>
        <h2 className='text-white text-2xl m-6 font-bold'>GenWealth</h2>
      </div>
      <Menu width={'80%'} isOpen={isOpen} onStateChange={(state) => setIsOpen(state.isOpen)}>
        <Link
          id="home"
          className={`menu-item ${clickedItem === 'home' ? 'clicked' : ''}`}
          to="/"
          onClick={() => handleItemClick('home')}
        >
          Home
        </Link>

        <Link
          id="intro"
          className={`menu-item ${clickedItem === 'intro' ? 'clicked' : ''}`}
          to="/intro"
          onClick={() => handleItemClick('intro')}
        >
          Intro
        </Link>

        <Link
          id="guide"
          className={`menu-item ${clickedItem === 'guide' ? 'clicked' : ''}`}
          to="/Guide"
          onClick={() => handleItemClick('guide')}
        >
          Follow Guide
        </Link>

        <Link
          id="gallery"
          className={`menu-item ${clickedItem === 'gallery' ? 'clicked' : ''}`}
          to="/Gallery"
          onClick={() => handleItemClick('gallery')}
        >
          Gallery
        </Link>

        <Link
          id="about"
          className={`menu-item ${clickedItem === 'about' ? 'clicked' : ''}`}
          to="/About"
          onClick={() => handleItemClick('about')}
        >
          About
        </Link>

        <Link
          id="questions"
          className={`menu-item ${clickedItem === 'questions' ? 'clicked' : ''}`}
          to="/Questions"
          onClick={() => handleItemClick('questions')}
        >
          Q & A
        </Link>

       

        {/* Other menu items */}
        <p className="menu-item mt-8">Ref # <br/> <span className="text-aqua">W1001488205</span></p>
      </Menu>
      {/* Close the menu when clicked outside */}
      {isOpen && <div className="backdrop" onClick={handleMenuClick}></div>}
    </nav>
  );
};

export default NavBar;
