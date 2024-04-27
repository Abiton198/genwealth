import React, { useState } from 'react';
import { WeatherDisplay } from '../utils';
import translationsEn from '../translations/translationsEn';
import translationsXh from '../translations/translationsXh';
import translationsAf from '../translations/translationsAf';
import translationsZu from '../translations/translationsZu';
import translationsVe from '../translations/translationsVe';
import que_image from '../img/world_image.jpeg'
import { Link } from 'react-router-dom';

const Home = () => {
  // Define state for language and set default language to English
  const [language, setLanguage] = useState('en');

  // Define translations object based on the selected language
  const translations = {
    en: translationsEn,
    xh: translationsXh,
    af: translationsAf,
    zu: translationsZu,
    ve: translationsVe,
  };

  // Function to handle language toggle
  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className='home-container'>
      <WeatherDisplay />
    

      {/* Language toggle dropdown */}
      <div className='language-dropdown'>
        <select value={language} onChange={(e) => toggleLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="af">Afrikaans</option>
          <option value="zu">isiVenda</option>
          <option value="xh">isiXhosa</option>
          <option value="ve">isiZulu</option>
        </select>
      </div>

      {/* Text displayed on home-page */}
      <div className='content-container'>
        <p className='italic text-red-700 text-bold animate-flicker'>{translations[language].become}</p>
        <p className='italic'>{translations[language].genwealth}</p>
        <p className='text'>{translations[language].ourwebsite}</p>
      </div>

    {/* Image */}
      <div className="world-image2" >
          <img src={que_image} alt="Profile"  />
        </div>

      <div className='button-container'>
        <Link to='/Intro' className='button animate-flicker'>{translations[language].getStarted}</Link>
      </div>

      <p className='text2 italic'>{translations[language].unlock}</p>
    </div>
  );
};

export default Home;
