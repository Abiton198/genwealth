import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import motivate1 from '../img/motivate1.jpg';
import motivate2 from '../img/motivate2.webp';
import motivate3 from '../img/motivate3.jpg';
import motivate4 from '../img/motivate4.png';
import motivate5 from '../img/motivate5.jpg';

const keyWeather = '6ddd3954f3eca243f3bc57cd214fe38c';

const Home = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch weather data from API
    const fetchWeather = async () => {
      try {
        // Get user's geolocation
        navigator.geolocation.getCurrentPosition(async (position) => {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${keyWeather}`);
          if (response.ok) {
            const data = await response.json();
            setWeather(data);
          } else {
            throw new Error('Failed to fetch weather data');
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed here
  };

  return (
    <div className='home' style={{ overflowX: 'hidden' }}>
      <h2 className='text-center text-black text-3xl font-bold mt-28'>GenWealth <br/> <span className='text-sm text-blue-900'>'Building generational legacy'</span></h2> {/* Updated heading */}
      <Slider {...settings}>
        <div>
          <img src={motivate1} alt="Image 1" className="slider-image" />
        </div>
        <div>
          <img src={motivate2} alt="Image 2" className="slider-image" />
        </div>
        <div>
          <img src={motivate3} alt="Image 3" className="slider-image" />
        </div>
        <div>
          <img src={motivate4} alt="Image 4" className="slider-image" />
        </div>
        <div>
          <img src={motivate5} alt="Image 5" className="slider-image" />
        </div>
      </Slider>
      {/* Display weather information */}
      {weather && (
        <div className="weather-info mt-2">
          <p>{weather.name}: {Math.round(weather.main.temp - 273.15)}°C, {weather.weather[0].description}</p>
        </div>
      )}
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
