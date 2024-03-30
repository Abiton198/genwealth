import React from 'react';

const Intro = () => {
  // Sample YouTube video ID for demonstration
  const youtubeVideoId = "WodCbX6hhhE";

  return (
    <div className='bg-white rounded-lg p-4 relative'>

      {/* Responsive Image with YouTube Play Button */}
      <div className='w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gray-300  relative'>
        {/* Overlay Image */}
        <a href={`https://www.youtube.com/watch?v=${youtubeVideoId}`} target='_blank' rel='noopener noreferrer' className='absolute inset-0'>
          <img
            src={`https://img.youtube.com/vi/${youtubeVideoId}/0.jpg`} // Thumbnail URL
            alt='YouTube Thumbnail'
            className='w-full h-full object-cover rounded-full'
          />
        </a>
        {/* YouTube Play Button */}
        <a href={`https://www.youtube.com/watch?v=${youtubeVideoId}`} target='_blank' rel='noopener noreferrer' className='absolute inset-0 flex items-center justify-center'>
          <svg className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-red-500 hover:text-red-700 cursor-pointer' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.429 10l-6.429-3.86v7.72L14.429 10z'></path>
          </svg>
        </a>
      </div>
      {/* YouTube Link */}
      <div className='mt-4'>
        <p className='text-black'>Business Intro</p>
        <a href={`https://www.youtube.com/watch?v=${youtubeVideoId}`} target='_blank' rel='noopener noreferrer' className='text-blue-500'>Watch on YouTube</a>
      </div>
    </div>
  );
};

export default Intro;
