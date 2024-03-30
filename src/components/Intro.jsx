import React from 'react';

const Intro = () => {
  // Sample YouTube video IDs for demonstration
  const youtubeVideoId1 = "WodCbX6hhhE";
  const youtubeVideoId2 = 'VgxnjwesIAg';
  // const youtubeVideoId3 = 'EFntprF5Kcw';

  return (
    <div className="bg-white rounded-lg p-4 relative">
      {/* Text on 1st video */}
      <div className="mt-4">
        <h2 className="text-black">The journey begins...</h2>
        <p className="text-black">Are you ready for an exhilarating journey into the world of Duepoint business? In just 3 minutes, this video will whisk you away on an adventure that marks the beginning of an incredible financial journey. So grab a seat, buckle up, and let's embark on this thrilling ride together!</p>
      </div>

      {/* Video 1 */}
      <div className="w-full md:flex justify-between items-center">
        {/* Responsive Image with YouTube Play Button */}
        <div className="w-full md:w-1/2 bg-gray-300 relative rounded-lg overflow-hidden">
          {/* Overlay Image */}
          <a href={`https://www.youtube.com/watch?v=${youtubeVideoId2}`} target="_blank" rel="noopener noreferrer" className="absolute inset-0">
            <img
              src={`https://img.youtube.com/vi/${youtubeVideoId2}/0.jpg`} // Thumbnail URL
              alt="YouTube Thumbnail"
              className="w-full h-full object-cover rounded-lg"
            />
          </a>
          {/* YouTube Play Button */}
          <a href={`https://www.youtube.com/watch?v=${youtubeVideoId2}`} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-red-500 hover:text-red-700 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.429 10l-6.429-3.86v7.72L14.429 10z"></path>
            </svg>
          </a>
        </div>

        {/* YouTube Link */}
        <div className="mt-4 md:mt-0 md:ml-4 w-full md:w-1/2">
          <p className="text-black">Watch on YouTube</p>
          <a href={`https://www.youtube.com/watch?v=${youtubeVideoId2}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">Watch Now</a>
        </div>
      </div>

      {/* Video 2 */}
      <div className="mt-8">
        <h2 className="text-black">The wealth exposed...</h2>
        <p className="text-black">Embark on an extraordinary journey towards financial empowerment with Duepoint! This captivating video encapsulates the very essence of our revolutionary referral marketing business. As you delve into its compelling narrative, you'll discover the boundless opportunities that await. Join us today and become part of a dynamic community driven by success and prosperity. Let this video be your guiding light towards a brighter financial future with Duepoint!</p>
      </div>

      {/* Video 2 */}
      <div className="w-full md:flex justify-between items-center mt-4">
        {/* Responsive Image with YouTube Play Button */}
        <div className="w-full md:w-1/2 bg-gray-300 relative rounded-lg overflow-hidden">
          {/* Overlay Image */}
          <a href={`https://www.youtube.com/watch?v=${youtubeVideoId1}`} target="_blank" rel="noopener noreferrer" className="absolute inset-0">
            <img
              src={`https://img.youtube.com/vi/${youtubeVideoId1}/0.jpg`} // Thumbnail URL
              alt="YouTube Thumbnail"
              className="w-full h-full object-cover rounded-lg"
            />
          </a>
          {/* YouTube Play Button */}
          <a href={`https://www.youtube.com/watch?v=${youtubeVideoId1}`} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-red-500 hover:text-red-700 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.429 10l-6.429-3.86v7.72L14.429 10z"></path>
            </svg>
          </a>
        </div>

        {/* YouTube Link */}
        <div className="mt-4 md:mt-0 md:ml-4 w-full md:w-1/2">
          <p className="text-black">Business Intro</p>
          <a href={`https://www.youtube.com/watch?v=${youtubeVideoId1}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">Watch Now</a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
