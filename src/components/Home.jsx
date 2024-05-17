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
  // Define state for popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(true);

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

  // Function to close the popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className='home-container'>
      <WeatherDisplay />
    
      {/* Language toggle dropdown */}
      <div className='language-dropdown'>
        <select value={language} onChange={(e) => toggleLanguage(e.target.value)}>
          <option value="en">En</option>
          <option value="af">Af</option>
          <option value="zu">Ven</option>
          <option value="xh">Xh</option>
          <option value="ve">Zu</option>
        </select>
      </div>

      {/* Text displayed on home-page */}
      <div className='content-container'>
        <p className='italic text-green-500 text-bold animate-flicker'>{translations[language].become}</p>
      </div>

      <div className='button-container'>
        <Link to='/Intro' className='button animate-flicker'>{translations[language].getStarted}</Link>
      </div>

      <p className='text2 italic'>{translations[language].unlock}</p>

      {/* Popup */}
      {isPopupVisible && (
        <div className='popup'>
          <div className='popup-content'>
            <p>Toggle language of preference!</p>
            <ul>
              <li>En - English</li>
              <li>Zu - IsiZulu</li>
              <li>Xh - isiXhosa</li>
              <li>Af - Afrikans</li>
              <li>Ve - IsiVenda</li>
            </ul>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
