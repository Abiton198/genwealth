import React from 'react';
import motivate4 from '../img/motivate4.png';
import {DisplayTime, WeatherDisplay} from '../utils'


const Home = () => {

  return (
    <div className='home' style={{ overflowX: 'hidden' }} >

    <WeatherDisplay/>

      <DisplayTime/>

      <p className='text-black text-justify mt-20 p-8'>Embark on an empowering journey with GenWealth, an independent business distributor affiliated with a leading financial company in South Africa. 
      <br/><span className='text-black mt-4'>Our mission is to empower individuals seeking entrepreneurial opportunities by offering independent distributor roles tailored for residents of the country.</span> <br/> <span className='text-black mt-4'>Our website serves as a comprehensive hub where you can explore the
      exciting opportunities we offer and access valuable information to guide you through the process.</span>
      </p>
        <div className='home-image'>
          <img src={motivate4} alt="Image 4" className="slider-image" />
        </div>

        <p className='text-black text-justify p-6'>Discover the potential for financial independence and personal growth as you navigate our website 
          and explore the opportunities available. From informative guides to step-by-step instructions, our platform 
          equips you with everything you need to kickstart your journey towards success.
          </p>
      {/* Action button below the text */}
      <div className="flex justify-center">
        <a href='/Intro'>
          <button className="bg-red-600 hover:bg-green-600 text-white font-bold py-4 px-8 rounded inline-flex items-center animate-flicker">
            Get Started
            <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zM6 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm9 3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zM3 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd" />
            </svg>
          </button>
        </a>
      </div>

        <p className='text-black text-justify mt-6 p-6'>Unlock the potential for success as an independent distributor. Your journey towards financial freedom starts here.</p>
    </div>
  );
};

export default Home;
