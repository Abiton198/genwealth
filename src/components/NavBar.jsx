// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { slide as Menu } from 'react-burger-menu';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [clickedItem, setClickedItem] = useState(null);

//   const handleItemClick = (itemId) => {
//     // Close the menu when an item is clicked
//     setIsOpen(false);
//     // Set the clicked item
//     setClickedItem(itemId);
//   };

//   const handleMenuClick = () => {
//     // Close the menu when clicked
//     setIsOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand flex">
//         <Link to="/" className="navbar-logo text-white"></Link>
//         <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
//           <span className="navbar-icon">&#9776;</span>
//         </button>
//         <h2 className='text-white text-2xl m-6 font-bold'>GenWealth</h2>

//  {/* Links to pages */}
//         <div className="nav-links">
//           <Link to="/" className="nav-link" onClick={() => handleItemClick('home')}>Home</Link>
//           <Link to="/intro" className="nav-link" onClick={() => handleItemClick('intro')}>Intro</Link>
//           <Link to="/Guide" className="nav-link" onClick={() => handleItemClick('guide')}>Follow Guide</Link>
//           <Link to="/Gallery" className="nav-link" onClick={() => handleItemClick('gallery')}>Gallery</Link>
//           <Link to="/About" className="nav-link" onClick={() => handleItemClick('about')}>About</Link>
//           <Link to="/Questions" className="nav-link" onClick={() => handleItemClick('questions')}>Q & A</Link>
//         </div>
  
//       </div>


//       <Menu width={'80%'} isOpen={isOpen} onStateChange={(state) => setIsOpen(state.isOpen)}>
//         <Link
//           id="home"
//           className={`menu-item ${clickedItem === 'home' ? 'clicked' : ''}`}
//           to="/"
//           onClick={() => handleItemClick('home')}
//         >
//           Home
//         </Link>

//         <Link
//           id="intro"
//           className={`menu-item ${clickedItem === 'intro' ? 'clicked' : ''}`}
//           to="/intro"
//           onClick={() => handleItemClick('intro')}
//         >
//           Intro
//         </Link>

//         <Link
//           id="guide"
//           className={`menu-item ${clickedItem === 'guide' ? 'clicked' : ''}`}
//           to="/Guide"
//           onClick={() => handleItemClick('guide')}
//         >
//           Guide
//         </Link>

//         <Link
//           id="gallery"
//           className={`menu-item ${clickedItem === 'gallery' ? 'clicked' : ''}`}
//           to="/Gallery"
//           onClick={() => handleItemClick('gallery')}
//         >
//           Gallery
//         </Link>

//         <Link
//           id="about"
//           className={`menu-item ${clickedItem === 'about' ? 'clicked' : ''}`}
//           to="/About"
//           onClick={() => handleItemClick('about')}
//         >
//           About
//         </Link>

//         <Link
//           id="questions"
//           className={`menu-item ${clickedItem === 'questions' ? 'clicked' : ''}`}
//           to="/Questions"
//           onClick={() => handleItemClick('questions')}
//         >
//           Q & A
//         </Link>

       

//         {/* Other menu items */}
//         {/* <p className="menu-item mt-8">Ref # <br/> <span className="text-aqua">W1001488205</span></p> */}
//       </Menu>
//       {/* Close the menu when clicked outside */}
//       {isOpen && <div className="backdrop" onClick={handleMenuClick}></div>}
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (itemId) => {
    // Set the clicked item
    setClickedItem(itemId);
    // Close the menu when an item is clicked
    setIsOpen(false);
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
      {/* Links to pages */}
      <div className={`nav-links ${isOpen ? 'hidden md:flex' : 'flex'}`}>
        <Link to="/" className="nav-link" onClick={() => handleItemClick('home')}></Link>
        <Link to="/intro" className="nav-link" onClick={() => handleItemClick('intro')}></Link>
        <Link to="/Guide" className="nav-link" onClick={() => handleItemClick('guide')}></Link>
        <Link to="/Gallery" className="nav-link" onClick={() => handleItemClick('gallery')}></Link>
        <Link to="/About" className="nav-link" onClick={() => handleItemClick('about')}></Link>
        <Link to="/Questions" className="nav-link" onClick={() => handleItemClick('questions')}></Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className={`menu ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className={`menu-item ${clickedItem === 'home' ? 'clicked' : ''}`} onClick={() => handleItemClick('home')}>Home</Link>
        <Link to="/intro" className={`menu-item ${clickedItem === 'intro' ? 'clicked' : ''}`} onClick={() => handleItemClick('intro')}>Intro</Link>
        <Link to="/Guide" className={`menu-item ${clickedItem === 'guide' ? 'clicked' : ''}`} onClick={() => handleItemClick('guide')}>Follow Guide</Link>
        <Link to="/Gallery" className={`menu-item ${clickedItem === 'gallery' ? 'clicked' : ''}`} onClick={() => handleItemClick('gallery')}>Gallery</Link>
        <Link to="/About" className={`menu-item ${clickedItem === 'about' ? 'clicked' : ''}`} onClick={() => handleItemClick('about')}>About</Link>
        <Link to="/Questions" className={`menu-item ${clickedItem === 'questions' ? 'clicked' : ''}`} onClick={() => handleItemClick('questions')}>Q & A</Link>
        {/* Other menu items */}
        <p className="menu-item mt-8">Wealth Engineer Num: <br/> <span className="text-aqua text-2xl">W1001488205</span></p>
      </div>

      {/* Close the menu when clicked outside */}
      {isOpen && <div className="backdrop" onClick={handleMenuClick}></div>}
    </nav>
  );
};

export default NavBar;
