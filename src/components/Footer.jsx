import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; // social media icons
import { SiSpotify } from 'react-icons/si';
import logo from '../img/logo.jpeg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="logo-container flex">
          <img src={logo} className="footer-logo mr-2 "/>
          <Link to="/" className='text-sm font-light'>If not this, then what?</Link>
          <p></p>
        </div>

        {/* Navigation */}
        <nav className="footer-nav">
          <ul className="footer-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/intro">Intro</Link></li>
            <li><Link to="/guide">Guide</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/questions">Q & A</Link></li>
            {/* <li><Link to="/requestMeeting">Request Meeting</Link></li> */}
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://web.facebook.com/Official.DuePoint/?_rdc=1&_rdr"><FaFacebook /></a>
          <a href='https://open.spotify.com/show/1tzJ9LlQDuvZWZH5xu7SVp'><SiSpotify/></a>
          <a href="https://www.instagram.com/duepoint.official/"><FaInstagram /></a>
          <a href="https://www.youtube.com/watch?v=WodCbX6hhhE&t=167s"><FaYoutube /></a>
        </div>

        {/* Contact Info
        <div className="contact-info">
          <p>+27761272025</p>
          <p>abitonp@gmail.com </p>
          <p>3 Heatherbank Street, Gqeberha, SA</p>
        </div> */}
      </div>

      {/* copyright sign */}
      <div className='copyright'>
        <p className='contact-info mt-1'>&copy; 2024 Abiton & Michelle. All rights reserved</p>
      </div>

    </footer>
  );
};

export default Footer;
