import React from 'react'

const Intro = () => {
  return (
    <div className='bg-white rounded-lg p-4'>
      {/* Image box with a square aspect ratio */}
      <div className='w-32 h-32 bg-gray-300 rounded-full'></div>
      {/* Other content */}
      <p className='text-black'>Business Intro</p>
    </div>
  );
};

export default Intro