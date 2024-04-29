import React, { useState, useEffect } from 'react';

function Popup({ message }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showPopup && (
        <div
          className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-gray-500 bg-opacity-50"
          style={{ zIndex: 1000 }}
        >
          <div className="bg-blue-200 rounded-lg p-4 md:p-6 lg:p-8">
            <h2 className="text-lg font-bold">Did you know?</h2>
            {message.split('\n').map((item, index) => (
              <p key={index}>{item}</p>))}
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
