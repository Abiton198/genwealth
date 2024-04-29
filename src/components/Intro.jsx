import {React, useState} from 'react';
import translationsEn from '../translations/translationsEn';
import translationsXh from '../translations/translationsXh';
import translationsAf from '../translations/translationsAf';
import translationsZu from '../translations/translationsZu';
import CopyTextToClipboard from '../utils/CopyToClipboard';
import Popup from '../utils/Popup';

const Intro = () => {
  const youtubeVideoId1 = "WodCbX6hhhE";
  const youtubeVideoId2 = 'VgxnjwesIAg';
  const youtubeVideoId3 = 'EFntprF5Kcw';
  const whatsappNumber = '+27761272025';

    // Define state for language and set default language to English
    const [language, setLanguage] = useState('en');

  // Define translations object based on the selected language
  const translations = {
    en: translationsEn,
    xh: translationsXh,
    af: translationsAf,
    zu: translationsZu
  };

  // Function to handle language toggle
  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const wealthNumber = 'W1001488205'

  return (
    <div className="bg-white rounded-lg p-4 mt-8">

          {/* Language toggle dropdown */}
          <div className='mb-4 pt-4'>
          <select value={language} onChange={(e) => toggleLanguage(e.target.value)}>
            <option value="en">En</option>
            <option value="af">Af</option>
            <option value="xh">Xh</option>
            <option value="zu">Zu</option>
          </select>
        </div>

      {/* First Video */}
      <div className="mt-4 md:flex justify-between items-center">
        {/* Text Content */}
        <div className="md:w-1/2 md:mr-4">

          {/* popup message */}
        <Popup message={"Welcome! \n We don't take anyone's hard earned money. No deposit is needed to anyone' account! We only share opportunity. You make your own research. \n Thank you. "} />
         
          <h2 className="text-black text-xl font-bold mb-2">{translations[language].thejourney}...</h2>
          <p className="text-black mb-4">{translations[language].areyou}!</p>
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
          <h2 className="text-black text-xl font-bold mb-2">{translations[language].thewealth}...</h2>
          <p className="text-black mb-4">{translations[language].embark} </p>
          <p className="text-black mb-4">{translations[language].getinvolved}</p>
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
        <h2 className="text-black text-xl font-bold mb-2">{translations[language].whywait}...</h2>
        <p className="text-gray-700 mb-4">
         {translations[language].asfor} 
          <span className="text-black"> <CopyTextToClipboard text={wealthNumber}/> </span>
        </p>
        <a href="https://portal.duepoint.net/register/application/v3/c5bc346b-2280-4545-a7c2-7ea8f80d91a8" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-red-600 text-white font-bold py-2 px-4 rounded animate-flicker mb-4">Sign-up Now</a>
        <p className="text-gray-700 mb-4">{translations[language].alternatively} </p>
        
        <div className="md:flex items-center mb-10">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden">
            <a href={`https://www.youtube.com/watch?v=${youtubeVideoId3}`} target="_blank" rel="noopener noreferrer" className="block">
              <img src={`https://img.youtube.com/vi/${youtubeVideoId3}/0.jpg`} alt="YouTube Thumbnail" className="w-full h-full object-cover" />
              <svg className="absolute inset-0 w-16 h-16 text-red-500 hover:text-red-700 cursor-pointer mx-auto my-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.429 10l-6.429-3.86v7.72L14.429 10z"></path>
              </svg>
            </a>
          </div>

      {/* Whatsapp messaging */}
          <a href={`whatsapp://send?phone=${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center animate-flicker mt-5 md:mt-0 md:ml-4">
           {translations[language].message} 
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
