// SpinningSentence.js
import React, { useState, useEffect } from 'react';
// import './SpinningSentence.css'; // Import CSS file for styling

const SpinningSentence = ({ sentence }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(prevIsVisible => !prevIsVisible);
    }, 1000); // Flash every 1 second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={isVisible ? 'visible' : 'hidden'}>
      {sentence}
    </div>
  );
};

export default SpinningSentence;
