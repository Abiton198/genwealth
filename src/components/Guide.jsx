
import React from "react";
import Step1 from '../img/Step1.png'
import Step2 from '../img/Step2.png'
import Step3 from '../img/Step3.png'
import Step5 from '../img/step5.jpeg'
import Carousel from "./Carousel";
import translationsEn from '../translations/translationsEn';
import translationsXh from '../translations/translationsXh';
import translationsAf from '../translations/translationsAf';
import translationsZu from '../translations/translationsZu';
import translationsVe from '../translations/translationsVe';
import { useState } from "react";

export default function Guide() {
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
    <div>
          {/* Language toggle dropdown */}
          <div className='mt-4 pt-10 text-black'>
                  <select value={language} onChange={(e) => toggleLanguage(e.target.value)}>
                    <option value="en">En</option>
                    <option value="af">Af</option>
                    <option value="zu">Ven</option>
                    <option value="xh">Xh</option>
                    <option value="ve">Zu</option>
                  </select>
                </div>
    <div className=" mt-1 px-4 md:px-8 lg:px-16">
      <div className="my-2 lg:my-1 mt-0">
        <h2 className="text-lg font-bold text-black mb-5">{translations[language].welcome}</h2>
        <p className="text-lg text-black leading-7 mb-4">
          {translations[language].signup}
        </p>

        <div className="mb-8">
          <h2 className="text-lg font-bold text-black mb-2">{translations[language].step1}</h2>
          <p className="text-black leading-7 mb-4">
          {translations[language].goon} <br/> 
            <a href="https://www.duepoint.net" className="text-black xl font-bold  hover:bg-green-600">www.duepoint.net</a>
          </p>
          <img src={Step1} alt="Step 1" className="w-full md:w-auto md:max-w-xs mx-auto mb-4" />

          <h2 className="text-lg font-bold text-black mb-2">{translations[language].step2}</h2>
          <p className="text-black leading-7 mb-4">
            {translations[language].asyou}
           <span className="text-blue-900 font-bold">Get Started</span>. {translations[language].congrats}
          </p>
          <img src={Step2} alt="Step 2" className="w-full md:w-auto md:max-w-xs mx-auto mb-4" />

          <h2 className="text-lg font-bold text-white mb-2">{translations[language].step3}</h2>
          <p className="text-black leading-7 mb-4">
          {translations[language].thismust}
            </p> <br/> 
                  
                  {/* flashing number */}
                  <div className="flex justify-center">
                  
                    <button className="bg-red-600 hover:bg-green-600 text-white font-bold py-4 px-8 rounded inline-flex items-center animate-flicker">
                          W1001488205
                      <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                </div>

           <p className="mb-4">
           {translations[language].nexttime}
           </p>
         
          <img src={Step3} alt="Step 3" className="w-full md:w-auto md:max-w-xs mx-auto mb-4" />


          <h2 className="text-lg font-bold text-black mb-2">{translations[language].step4}</h2>
          <p className="text-black leading-7 mb-4">
          {translations[language].nowits} <br/>
            <span className="text-green-800 font-bold"> - {translations[language].idnu}</span> <br/>
            <span className="text-green-800 font-bold"> - {translations[language].proofofres}</span> <br/>
            ** {translations[language].become} <span className="text-red-300 font-bold">info@duepoint.net</span> 
            {translations[language].update}<br/>
            ** {translations[language].setdebit} <br/>
            {translations[language].belowimages}
          </p>
          <div className="mb-4">
            <Carousel />
          </div>

          <h2 className="text-lg font-bold text-black mb-2">{translations[language].step5}</h2>
          <p className="text-black leading-7 mb-4">
          {translations[language].thenlastly} <span className="text-red-500 font-extrabold">PlayStore</span>.{translations[language].verylight}
          </p>
          <img src={Step5} alt="Step 5" className="w-full md:w-auto md:max-w-xs mx-auto mb-4" />

          <p className="text-lg font-bold text-green-900 mb-2"> {translations[language].thankyou}</p>

          <div className="flex justify-center">
            <a href='/Intro'>
              <button className="bg-red-600 hover:bg-green-600 text-white font-bold py-4 px-8 rounded inline-flex items-center animate-flicker">
              {translations[language].ready}
                <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
