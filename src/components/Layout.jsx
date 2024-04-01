import React, { useState } from 'react';

const Layout = ({ children }) => {
  // State to track the current mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Styles for dark and light mode
  const darkModeStyles = {
    backgroundColor: '#333',
    color: '#fff',
  };

  const lightModeStyles = {
    backgroundColor: '#fff',
    color: '#333',
  };

  // Conditional styles based on the current mode
  const containerStyles = isDarkMode ? darkModeStyles : lightModeStyles;

  return (
    <div className="layout" style={containerStyles}>
      {/* Dark/Light mode toggle switch */}
      <div className="fixed top-0 right-0 m-2">
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>

      {/* Render children components */}
      {children}
    </div>
  );
};

export default Layout;
