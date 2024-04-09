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

  const handleMenuClick = (event) => {
    // Prevent the click event from propagating
    event.stopPropagation();
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand flex">
        <Link to="/" className="navbar-logo text-white"></Link>
        <button className="navbar-toggle" onClick={(event) => { setIsOpen(!isOpen); handleMenuClick(event); }}>
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
        {/* Other menu items */}
        <p className="menu-item mt-8">Ref # <br/> <span className="text-aqua">W1001488205</span></p>
      </Menu>
    </nav>
  );
};

export default NavBar;
