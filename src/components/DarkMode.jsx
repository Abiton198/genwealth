import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun and moon icons

const DarkMode = ({ children }) => {
  // State to track the current mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="layout" style={isDarkMode ? { backgroundColor: '#333', color: '#fff' } : { backgroundColor: '#fff', color: '#333' }}>
      {/* Moon and sun icons for dark/light mode */}
      <div className="toggle-icons">
        {isDarkMode ? (
          <span onClick={toggleDarkMode} className="toggle-icon">
            <FaSun /> {/* Sun icon */}
          </span>
        ) : (
          <span onClick={toggleDarkMode} className="toggle-icon">
            <FaMoon /> {/* Moon icon */}
          </span>
        )}
      </div>

      {/* Render children components */}
      <div style={{ color: isDarkMode ? '#fff' : '#333' }}>
        {/* Your text content here */}
        {children}
      </div>
    </div>
  );
};

export default DarkMode;
