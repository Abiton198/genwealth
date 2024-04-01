import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { slide as Menu } from 'react-burger-menu';


const Sidebar = () => {
  
  return (
    <div>
         <Menu width={'80%'} >
        <Link id="home" className="menu-item" to="/">Home</Link>
        <Link id="about" className="menu-item" to="/About">About</Link>
        <Link id="intro" className="menu-item" to="/Intro">Intro</Link>
        <Link id="Questions" className="menu-item" to="/Questions">Questions</Link>
        <Link id="Testimonies" className="menu-item" to="/Testimonies">Testimonies</Link>
        <Link id="Guide" className="menu-item" to="/Guide">Guide</Link>
      </Menu>
    </div>
  );
};

export default Sidebar;
