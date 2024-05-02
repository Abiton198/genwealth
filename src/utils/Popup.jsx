import React, { useState, useEffect } from 'react';
import { FaThumbsUp } from 'react-icons/fa'; // Import thumbs-up 
import { TbRuler } from 'react-icons/tb';

function Popup({ message }) {
  const [showPopup, setShowPopup] = useState(TbRuler);

  useEffect(() => {
    // Check if the popup has been shown before
    const popupShownBefore = localStorage.getItem('popupShown');

    // If the popup has not been shown before, set showPopup to true
    if (!popupShownBefore) {
      setShowPopup(true);
    }
  }, []); // Empty dependency array ensures this effect runs only once

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem('popupShown', true); // Save the popup shown state to local storage
  };
  
  const handleGoodClick = () => {
    handleClose();
  };

  return (
    <div>
      {showPopup && (
        <div
          className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-gray-500 bg-opacity-50"
          style={{ zIndex: 1000 }}
        >
          <div className="bg-blue-100 rounded-lg p-4 md:p-6 lg:p-8">
            <h2 className="text-lg font-bold">Did you know?</h2>
            {message.split('\n').map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            <div className="icon-container">
              <button className="icon-button p-2" onClick={handleGoodClick}>
                <FaThumbsUp /> {/* Thumbs-up icon */}
              </button>
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
