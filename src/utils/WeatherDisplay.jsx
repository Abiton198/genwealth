import React, { useState, useEffect } from 'react';

const keyWeather = '6ddd3954f3eca243f3bc57cd214fe38c';

export default function WeatherDisplay() {
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

  return (
    <div>
      {/* Display weather information */}
      {weather && (
        <div className="weather-info mt-2 text-white">
          <p>{weather.name}: {Math.round(weather.main.temp - 273.15)}°C, {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
