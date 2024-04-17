import React, { useState } from 'react';
import translationsEn from '../translations/translationsEn';
import translationsXh from '../translations/translationsXh';
import translationsAf from '../translations/translationsAf';

const Translate = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'xh' : prevLanguage === 'xh' ? 'af' : 'en'));
  };

  // Define translations object based on the selected language
  const translations = {
    en: translationsEn,
    xh: translationsXh,
    af: translationsAf
  };

  return (
    <div>
      <button onClick={toggleLanguage}>
        Language ({language === 'en' ? 'Xhosa / English' : language === 'xh' ? 'Afrikaans / English' : 'English / Xhosa'})
      </button>
      {/* Pass language, translation data, and toggle function to children */}
      {React.Children.map(children, child =>
        React.cloneElement(child, { language, translations: translations[language], toggleLanguage })
      )}
    </div>
  );
};

export default Translate;
