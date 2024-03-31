import React, { useState } from 'react';
import Abiton from '../img/Abiton.jpeg';
import Michelle from '../img/Michelle.jpeg';

const About = () => {
  // contact me directly on WhatsApp
  const whatsappNumber = '+27761272025';
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-black font-bold text-2xl mb-4">Allow us to introduce ourselves:</h2>
      <div className="flex flex-col items-center mb-4">
        {/* Abiton's Image */}
        <div className="mb-2">
          <img src={Abiton} alt="Abiton" className="w-32 h-32 rounded-full mx-auto" />
        </div>
        <p className="text-center mb-4">Abiton</p>
      </div>
      <div className="flex flex-col items-center mb-4">
        {/* Michelle's Image */}
        <div className="mb-2">
          <img src={Michelle} alt="Michelle" className="w-32 h-32 rounded-full mx-auto" />
        </div>
        <p className="text-center">Michelle</p>
      </div>

      {/* Introduction Text */}
      <div className={isCollapsed ? 'block' : 'hidden'}>
        <p className="mb-4">
          We are Abiton and Mechelle, and we sincerely appreciate you taking the time to explore our platform.

          In light of the challenging economic landscape in South Africa and across the globe, we have sought out alternative avenues to supplement our income. We understand the importance of finding stable and dependable sources of revenue, which can often be elusive.

          In our quest, we discovered the Duepoint opportunity. Upon thorough examination of the materials provided, we found it to be a business model that not only complements our current income streams but also promises steady growth and recurring earnings for a lifetime.
        </p>

        <p>  Our role as Wealth Engineers with Duepoint is simple - to share this remarkable opportunity with individuals we encounter in our everyday lives.

Driven by our passion for people and our desire to alleviate financial struggles, it is our mission to extend this opportunity to as many individuals as possible, empowering them to improve their circumstances.

As you can see, it requires minimal effort to introduce you to this platform, and with the same level of effort, you too can become a part of this venture and share it with others.

Participating in this business venture will not only shape your financial future but also have a positive impact on the lives of those you introduce to this invaluable opportunity.

Whatever decision you make, we wish you the very best!
</p>
      </div>

      {/* WhatsApp Button */}
      <a href={`whatsapp://send?phone=${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center animate-flicker ml-5">
          Message Us on WhatsApp
          <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
          </svg>
        </button>
      </a>

      {/* Read more toggle */}
      <p className="mt-4 text-center text-blue-500 cursor-pointer" onClick={toggleCollapse}>
        {isCollapsed ? 'Show less' :'Read more...'}

      </p>
    </div>
  );
};

export default About;
