// import React, { useState } from 'react';

// const Home = () => {
//   // State to track the current mode
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Function to toggle between dark and light mode
//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   // Styles for dark and light mode
//   const darkModeStyles = {
//     backgroundColor: '#333',
//     color: '#fff',
//   };

//   const lightModeStyles = {
//     backgroundColor: '#fff',
//     color: '#333',
//   };

//   // Conditional styles based on the current mode
//   const containerStyles = isDarkMode ? darkModeStyles : lightModeStyles;

//   return (
//     <div className="flex flex-col items-center justify-evenly h-screen m-2 p-2" style={containerStyles}>
//       <p className="text-4xl md:text-5xl lg:text-6xl text-center mb-12">"Discover Your Path to Financial Freedom: Start Building Your Fortune Today!"</p>
      
//       {/* action button below the text */}
//       <a href='/Intro'>
//         <button className="bg-red-600 hover:bg-green-600 text-white font-bold py-4 px-8 rounded inline-flex items-center animate-flicker">
//           Get Started
//           <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
//           </svg>
//         </button>
//       </a>

//       {/* Dark/Light mode toggle button at the far corner */}
//       <div className="fixed bottom-4 right-4">
//         <button onClick={toggleDarkMode} className="bg-red-600 hover:bg-green-600 text-white font-bold py-4 px-8 rounded inline-flex items-center animate-flicker">
//           {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//           <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from 'react';

const Home = () => {
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
    <div className='home'>
    <div className="flex flex-col items-center justify-evenly h-screen m-2 p-2" style={containerStyles}>
      <p className="text-4xl md:text-5xl lg:text-6xl text-center mb-12">"Discover Your Path to Financial Freedom: Start Building Your Fortune Today!"</p>
      
      {/* Action button below the text */}
      <a href='/Intro'>
        <button className="bg-red-600 hover:bg-green-600 text-white font-bold py-4 px-8 rounded inline-flex items-center animate-flicker">
          Get Started
          <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
          </svg>
        </button>
      </a>

      {/* Dark/Light mode toggle switch below the hamburger */}
      <div className="fixed top-0 right-0 m-2">
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
    </div>
  );
};

export default Home;
