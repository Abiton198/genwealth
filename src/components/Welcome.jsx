import React from 'react'

const Welcome = () => {
    return (
      <div className='bg-white rounded-lg p-4'>
        {/* Image box with a square aspect ratio */}
        <div className='w-32 h-32 bg-gray-600 rounded-full'></div>
        {/* Other content */}
        <p className='text-black'>Welcome</p>
      </div>
    );
  };

  export default Welcome