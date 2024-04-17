import React, { useState } from 'react';
import motivate4 from '../img/motivate4.png';
import { WeatherDisplay, DisplayTime } from '../utils';
import translationsEn from '../translations/translationsEn';
import translationsXh from '../translations/translationsXh';
import translationsAf from '../translations/translationsAf';

const Home = () => {
  // Define state for language and set default language to English
  const [language, setLanguage] = useState('en');

  // Define translations object based on the selected language
  const translations = {
    en: translationsEn,
    xh: translationsXh,
    af: translationsAf
  };

  // Function to handle language toggle
  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className='home' style={{ overflowX: 'hidden' }}>
      <WeatherDisplay />
      <DisplayTime />

      {/* Language toggle dropdown */}
      <div className='mb-4 pt-4'>
        <select value={language} onChange={(e) => toggleLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="xh">Xhosa</option>
          <option value="af">Afrikaans</option>
        </select>
      </div>

      {/* Text displayed on home-page */}
      <p className='text-black text-justify mt-20 p-8'>
        {translations[language].become}
        <br />
        <span className='text-black mt-4'>{translations[language].genwealth}</span> <br />{' '}
        <span className='text-black mt-4'>{translations[language].ourwebsite}</span>
      </p>
      <div className='home-image'>
        <img src={motivate4} alt='Image 4' className='slider-image' />
      </div>

      <p className='text-black text-justify p-6'>{translations[language].notselling}</p>

      <div className='flex justify-center'>
        <a href='/Intro'>
          <button className='bg-red-600 hover:bg-green-800 text-white font-bold py-4 px-8 rounded inline-flex items-center animate-flicker'>
            {translations[language].getStarted}
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

      <p className='text-black text-justify mt-6 p-6'>{translations[language].unlock}</p>
    </div>
  );
};

export default Home;
