import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const Sidebar = () => {
  return (
    <Menu>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/About">About</a>
      <a id="intro" className="menu-item" href="/Intro">Intro</a>
      <a id="Questions" className="menu-item" href="/Questions">Questions</a>
      <a id="Testimonies" className="menu-item" href="/Testimonies">Testimonies</a>
    </Menu>
  );
};

export default Sidebar;