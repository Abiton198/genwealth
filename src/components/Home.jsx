import React, { useState } from 'react';
import { WeatherDisplay } from '../utils';
import translationsEn from '../translations/translationsEn';
import translationsXh from '../translations/translationsXh';
import translationsAf from '../translations/translationsAf';
import translationsZu from '../translations/translationsZu';
import translationsVe from '../translations/translationsVe';
import SpinningSentence from '../utils/effects_sentences'
import que_image from '../img/world_image.jpeg'

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

  // spinning sentence
  const sentence = translations[language].become;
  const delay = 100; // milliseconds

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
        {/* <p className='text text-red-700'><SpinningSentence sentence={sentence} delay={delay}/></p> */}
        {/* <p className='italic'>{translations[language].become}</p> */}
        <p className='italic'>{translations[language].genwealth}</p>
        <p className='text'>{translations[language].ourwebsite}</p>
      </div>

    {/* Image */}
      <div className="world-image2" >
          <img src={que_image} alt="Profile"  />
        </div>

      <div className='button-container'>
        <a href='/Intro' className='button'>{translations[language].getStarted}</a>
      </div>

      <p className='text italic'>{translations[language].unlock}</p>
    </div>
  );
};

export default Home;
