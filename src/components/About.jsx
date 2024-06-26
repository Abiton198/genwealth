import React, { useState } from 'react';
import abiton2 from '../img/abiton2.jpeg';
import bus_partner from '../img/bus_partner2.jpeg';
import translationsEn from '../translations/translationsEn';
import translationsXh from '../translations/translationsXh';
import translationsAf from '../translations/translationsAf';
import translationsZu from '../translations/translationsZu';
import translationsVe from '../translations/translationsVe';
import Popup from '../utils/Popup';



const About = () => {
  const whatsappNumber = '+27664314171';
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
    zu: translationsZu,
    ve: translationsVe,
  };

  // Function to handle language toggle
  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };




  return (
    <div className="container mx-auto px-4 mt-6">

          {/* Language toggle dropdown */}
          <div className='mb-2 pt-6'>
          <select value={language} onChange={(e) => toggleLanguage(e.target.value)}>
            <option value="en">En</option>
            <option value="af">Af</option>
            <option value="xh">Xh</option>
            <option value="zu">Zu</option>
            <option value="zu">Ve</option>
          </select>
        </div>
        

      <h2 className="text-2xl font-bold text-center mb-2">{translations[language].allowus}:</h2>
      

     


     <div className="digital-card-container">
      
      {/* First Digital Card */}
      <div className="digital-card">
        <div className="digital-card-header">
          <img src={abiton2} alt="Profile" className="profile-image" />
        </div>
        <div className="digital-card-content">
          <h2 className="card-title">Abiton</h2>
          <p className="card-description">Wealth Engineer</p>
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
        </p>
        
        
        <p className="text-black mb-4">
          {translations[language].duepointbus}
        </p>
          

        <p className="text-black mb-4">
         {translations[language].seeking}
        </p>


        <p className="text-black mb-4">
         {translations[language].readright}
        </p>

        <p className="text-black mb-4">
          {translations[language].picture}
        </p>

        <p className="text-black mb-4">
          {translations[language].opportunity}
        </p>
      </div>

      {/* readmore... */}
      <div className="flex justify-center mb-1 ">
        <p
          onClick={toggleCollapse}
          className="text-black font-bold pt-1 px-4 rounded inline-flex items-center  "
        >
          {isCollapsed ? 'Show less' : 'Read more...'}
        </p>
      </div>

         {/* WhatsApp Button */}
      <div className="mb-16 pb-16">
        <a href={`whatsapp://send?phone=${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          <p className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 rounded inline-flex items-center animate-flicker">{translations[language].message}</p>
        </a>
      </div>
      {/* a pop up message when a person scrolls on the about page */}
    <Popup message={"3 Membership benefits: \n - 24/7 Road Assistance\n - 24/7 Legal Call\n - 24/7 Medical Call"} />


     <Footer/>   
    </div>
  );
};

export default About;
