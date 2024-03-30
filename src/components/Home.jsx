import React from 'react'

const Home = () => {
    return (


      <div className='flex flex-col items-center justify-evenly h-screen m-2 p-2 bg-green'>
      <p className="text-4xl md:text-5xl lg:text-6xl text-center mb-12">"Discover Your Path to Financial Freedom: Start Building Your Fortune Today!"</p>
      
      {/* the flickering button */}
      <a href='/intro'>
        <button className="bg-red-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded inline-flex items-center animate-flicker">
          Get Started
          <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
          </svg>
        </button>
      </a>
    </div>
    



      // <div className='bg-white rounded-lg p-4'>
      //   {/* Image box with a square aspect ratio */}
      //   <div className='w-32 h-32 bg-gray-600 rounded-full'></div>
      //   {/* Other content */}
      //   <p className='text-black'>Welcome</p>
      // </div>
    );
  };

  export default Home