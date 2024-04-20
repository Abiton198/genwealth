import React, { useState } from 'react';
import Abiton from '../img/Abiton.jpeg';
import bus_partner from '../img/bus_partner2.jpeg';
import translationsEn from '../translations/translationsEn';
import translationsXh from '../translations/translationsXh';
import translationsAf from '../translations/translationsAf';
import translationsZu from '../translations/translationsZu';


const About = () => {
  const whatsappNumber = '+27761272025';
  const [isCollapsed, setIsCollapsed] = useState(false);
  
    // Define state for language and set default language to English
    const [language, setLanguage] = useState('en');
  
  // toggle for readmore button
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };


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




  return (
    <div className="container mx-auto px-4 mt-6">

          {/* Language toggle dropdown */}
          <div className='mb-2 pt-4'>
          <select value={language} onChange={(e) => toggleLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="af">Afrikaans</option>
            <option value="xh">isiXhosa</option>
            <option value="zu">isiZulu</option>
          </select>
        </div>

      <h2 className="text-2xl font-bold text-center mb-2">{translations[language].allowus}:</h2>
      
    
     <div className="digital-card-container">
      {/* First Digital Card */}
      <div className="digital-card">
        <div className="digital-card-header">
          <img src={Abiton} alt="Profile" className="profile-image" />
        </div>
        <div className="digital-card-content">
          <h2 className="card-title">Abiton</h2>
          <p className="card-description">Business Partner</p>
          {/* <button className="card-button">Gqeberha</button> */}
        </div>
      </div>

      {/* Second Digital Card */}
      <div className="digital-card">
        <div className="digital-card-header">
          <img src={bus_partner} alt="Profile" className="profile-image" />
        </div>
        <div className="digital-card-content">
          <h2 className="card-title">Michelle</h2>
          <p className="card-description">Business Partner</p>
          {/* <button className="card-button">Gqeberha</button> */}
        </div>
      </div>
    </div>



      <div className={isCollapsed ? 'block' : 'hidden'}>
        <p className="text-black mb-4">
          {translations[language].weare}
          {/* We are Abiton and Michelle, and we sincerely appreciate you taking the time to explore our platform.
          In light of the challenging economic landscape in South Africa and across the globe, we have sought out alternative avenues to supplement our income. */}
        </p>
        
        <p className="text-black mb-4">
          {translations[language].weunderstand}
          {/* We understand the importance of finding stable and dependable sources of revenue, which can often be elusive.
          In our quest, we discovered the Duepoint opportunity. Upon thorough examination of the materials provided, we found it to be a business model that not only complements our current income streams but also promises steady growth and recurring earnings for a lifetime. */}
        </p>

        <p className="text-black mb-4">
         {translations[language].ourrole}
          {/* Our role as Wealth Engineers with Duepoint is simple - to share this remarkable opportunity with individuals we encounter in our everyday lives.
          Driven by our passion for people and our desire to alleviate financial struggles, it is our mission to extend this opportunity to as many individuals as possible, empowering them to improve their circumstances. */}
        </p>

        <p className="text-black mb-4">
         {translations[language].asyou}
          {/* As you can see, it requires minimal effort to introduce you to this platform, and with the same level of effort, you too can become a part of this venture and share it with others.
          Participating in this business venture will not only shape your financial future but also have a positive impact on the lives of those you introduce to this invaluable opportunity. */}
        </p>

        <p className="text-black mb-4">
          {translations[language].whatever}
          {/* Whatever decision you make, we wish you the very best! */}
        </p>
      </div>

      <div className="flex justify-center ">
        <p
          onClick={toggleCollapse}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center animate-flicker mb-8"
        >
          {isCollapsed ? 'Show less' : 'Read more...'}
        </p>
      </div>

      {/* WhatsApp Button */}
      <div className="flex justify-center mt-8">
        <a href={`whatsapp://send?phone=${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center animate-flicker">
            {translations[language].message}
            {/* Message Us on WhatsApp */}
            <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
