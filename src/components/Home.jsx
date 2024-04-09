import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import motivate1 from '../img/motivate1.jpg';
import motivate2 from '../img/motivate2.webp';
import motivate3 from '../img/motivate3.jpg';
import motivate4 from '../img/motivate4.png';
import motivate5 from '../img/motivate5.jpg';
import {DisplayTime, WeatherDisplay} from '../utils'

const Home = () => {

  return (
    <div className='home' style={{ overflowX: 'hidden' }}>

        <div>
          <img src={motivate4} alt="Image 4" className="slider-image" />
        </div>
    <WeatherDisplay/>

      <DisplayTime/>
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
    </div>
  );
};

export default Home;
