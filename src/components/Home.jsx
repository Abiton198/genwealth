import React, { useState } from 'react';
import motivate4 from '../img/motivate4.png';
import { DisplayTime, WeatherDisplay } from '../utils';

// Import Xhosa translations
import translationsXh from '../translations/translationsXh';
import translationsEn from '../translations/translationsEn';

const Home = () => {
  // Set the default language to English
  const [language, setLanguage] = useState('en');

  // Function to toggle between English and Xhosa
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'xh' : 'en');
  };

  // Use the translations based on the selected language
  const translations = language === 'en' ? translationsEn: translationsXh;

  return (
    <div className='home' style={{ overflowX: 'hidden' }}>
      <WeatherDisplay />
      <DisplayTime />

      <p className='text-black text-justify mt-20 p-8'>
        {translations.become}
        <br />
        <span className='text-black mt-4'>{translations.genwealth}</span> <br />{' '}
        <span className='text-black mt-4'>{translations.ourwebsite}</span>
      </p>
      <div className='home-image'>
        <img src={motivate4} alt='Image 4' className='slider-image' />
      </div>

      <p className='text-black text-justify p-6'>{translations.notSelling}</p>

      <div className='flex justify-center'>
        <a href='/Intro'>
          <button className='bg-red-600 hover:bg-green-600 text-white font-bold py-4 px-8 rounded inline-flex items-center animate-flicker'>
            {translations.getStarted}
            <svg className='w-6 h-6 ml-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </a>
      </div>

      <p className='text-black text-justify mt-6 p-6'>{translations.unlockPotential}</p>

    <div className='mb-14'>
      {/* Language toggle button */}
      <button onClick={toggleLanguage} className='bg-blue-600 hover:bg-green-600 text-white font-bold py-4 px-8 rounded inline-flex items-center animate-flicker'>Toggle Language ({language === 'en' ? 'Xhosa' : 'English'})</button>
    </div>
    </div>
  );
};

export default Home;
