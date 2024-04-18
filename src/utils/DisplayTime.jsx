import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once on mount

  const formatDateTime = (dateTime) => {
    const options = {
      // weekday: 'long',
      day: 'numeric',
      month: 'short',
      // year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };

    const formattedDateTime = dateTime.toLocaleDateString('en-US', options);
    const timeWithoutMinutes = formattedDateTime.split(',')[1].trim(); // Extracting time without minutes
    const hours = timeWithoutMinutes.split(':')[0]; // Extracting hours
    const minutes = timeWithoutMinutes.split(':')[0]; // Extracting minutes

    return `${formattedDateTime}`;
  };

  return (
    <div className="weather-info mt-16 pt-2">
   
      <p>{formatDateTime(currentDateTime)}</p>
    </div>
  );
};

export default DateTimeDisplay;
