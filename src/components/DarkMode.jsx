import React, { useState } from 'react';

const DarkMode = ({ children }) => {
  // State to track the current mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="layout" style={isDarkMode ? { backgroundColor: '#333', color: '#fff' } : { backgroundColor: '#fff', color: '#333' }}>
      {/* Dark/Light mode toggle switch */}
      <div className="switch-container fixed top-0 right-0 m-2">
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
          <span className="slider"></span>
        </label>
      </div>

      {/* Render children components */}
      <div className={isDarkMode ? 'text-white' : 'text-black'}>
        {/* Your text content here */}
        {children}
      </div>
    </div>
  );
};

export default DarkMode;
