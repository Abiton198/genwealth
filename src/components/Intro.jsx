import React from 'react';

const Intro = () => {
  const youtubeVideoId1 = "WodCbX6hhhE";
  const youtubeVideoId2 = 'VgxnjwesIAg';
  const youtubeVideoId3 = 'EFntprF5Kcw';
  const whatsappNumber = '+27761272025';

  return (
    <div className="bg-white rounded-lg p-4 mt-8">
      {/* First Video */}
      <div className="mt-4 md:flex justify-between items-center">
        {/* Text Content */}
        <div className="md:w-1/2 md:mr-4">
          <h2 className="text-black text-xl font-bold mb-2">The journey begins...</h2>
          <p className="text-black mb-4">Are you ready for an exhilarating journey into the world of Duepoint business? In just 3 minutes, this video will whisk you away on an adventure that marks the beginning of an incredible financial journey. So grab a seat, buckle up, and let's embark on this thrilling ride together!</p>
        </div>
        {/* Video Thumbnail */}
        <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg">
          <a href={`https://www.youtube.com/watch?v=${youtubeVideoId2}`} target="_blank" rel="noopener noreferrer" className="block">
            <img src={`https://img.youtube.com/vi/${youtubeVideoId2}/0.jpg`} alt="YouTube Thumbnail" className="w-full object-cover" />
            <svg className="absolute inset-0 w-16 h-16 text-red-500 hover:text-red-700 cursor-pointer mx-auto my-auto" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.429 10l-6.429-3.86v7.72L14.429 10z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Second Video */}
      <div className="mt-8 md:flex justify-between items-center">
        {/* Text Content */}
        <div className="md:w-1/2 md:ml-4">
          <h2 className="text-black text-xl font-bold mb-2">The wealth exposed...</h2>
          <p className="text-black mb-4">Embark on an extraordinary journey towards financial empowerment with Duepoint! This captivating video encapsulates the very essence of our asset-based business. As you delve into its compelling narrative, you'll discover the boundless opportunities that await.</p>
          <p className="text-black mb-4">Get involved today and become part of a dynamic community driven by great vision. Let this video be your guiding light towards a brighter financial future with Duepoint!</p>
        </div>
        {/* Video Thumbnail */}
        <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg">
          <a href={`https://www.youtube.com/watch?v=${youtubeVideoId1}`} target="_blank" rel="noopener noreferrer" className="block">
            <img src={`https://img.youtube.com/vi/${youtubeVideoId1}/0.jpg`} alt="YouTube Thumbnail" className="w-full object-cover" />
            <svg className="absolute inset-0 w-16 h-16 text-red-500 hover:text-red-700 cursor-pointer mx-auto my-auto" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.429 10l-6.429-3.86v7.72L14.429 10z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Call to action */}
      <div className="mt-8">
        <h2 className="text-black text-xl font-bold mb-2">Why wait now...</h2>
        <p className="text-gray-700 mb-4">
          As for us, we jumped in. Copy the Wealth Engineer Number to write on who introduced you? Yes, it's that easy!
          <span className="text-black text-2xl font-bold"> W1001488205</span>
        </p>
        <a href="https://portal.duepoint.net/register/application/v3/c5bc346b-2280-4545-a7c2-7ea8f80d91a8" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-red-600 text-white font-bold py-2 px-4 rounded animate-flicker mb-4">Sign-up Now</a>
        <p className="text-gray-700 mb-4">Alternatively, if you want to explore further, click below to watch "Objections Overruled!" or contact us directly on WhatsApp.</p>
        <div className="md:flex items-center">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden">
            <a href={`https://www.youtube.com/watch?v=${youtubeVideoId3}`} target="_blank" rel="noopener noreferrer" className="block">
              <img src={`https://img.youtube.com/vi/${youtubeVideoId3}/0.jpg`} alt="YouTube Thumbnail" className="w-full h-full object-cover" />
              <svg className="absolute inset-0 w-16 h-16 text-red-500 hover:text-red-700 cursor-pointer mx-auto my-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.429 10l-6.429-3.86v7.72L14.429 10z"></path>
              </svg>
            </a>
          </div>
          <a href={`whatsapp://send?phone=${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center animate-flicker mt-5 md:mt-0 md:ml-4">
            Message Us on WhatsApp
            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
