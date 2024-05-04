import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { slide as Menu } from 'react-burger-menu';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (itemId) => {
    // Close the menu when an item is clicked
    setIsOpen(false);
    // Set the clicked item
    setClickedItem(itemId);
  };

  return (
    <div>
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
          id="about"
          className={`menu-item ${clickedItem === 'about' ? 'clicked' : ''}`}
          to="/About"
          onClick={() => handleItemClick('about')}
        >
          About
        </Link>
        <Link
          id="intro"
          className={`menu-item ${clickedItem === 'intro' ? 'clicked' : ''}`}
          to="/Intro"
          onClick={() => handleItemClick('intro')}
        >
          Intro
        </Link>
        <Link
          id="questions"
          className={`menu-item ${clickedItem === 'questions' ? 'clicked' : ''}`}
          to="/Questions"
          onClick={() => handleItemClick('questions')}
        >
          Q & A
        </Link>
        <Link
          id="testimonies"
          className={`menu-item ${clickedItem === 'testimonies' ? 'clicked' : ''}`}
          to="/Testimonies"
          onClick={() => handleItemClick('testimonies')}
        >
          Gallery
        </Link>
        <Link
          id="guide"
          className={`menu-item ${clickedItem === 'guide' ? 'clicked' : ''}`}
          to="/Guide"
          onClick={() => handleItemClick('guide')}
        >
          Guide
        </Link>
        {/* <Link
          id="commentform"
          className={`menu-item ${clickedItem === 'commentform' ? 'clicked' : ''}`}
          to="/CommentForm"
          onClick={() => handleItemClick('commentform')}
        >
          Comments
        </Link> */}
        <p className="menu-item mt-8">Ref # <br/> <span className="text-aqua">W1001488205</span></p>
      </Menu>
    </div>
  );
};

export default Sidebar;
