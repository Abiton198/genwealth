import React, { useState } from 'react';

const RequestMeeting = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    meetUpPlace: '',
    message: '',
    isWeekend: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  const whatsappDirectCallTimes = [
    { time: '10:00', available: true },
    { time: '18:00', available: true },
    { time: '19:00', available: true },
  ];

  const weekendTimes = [
    { time: '08:00', available: true },
    { time: '09:00', available: true },
    { time: '10:00', available: true },
  ];
 
  const weekdayTimes = [
    { time: '14:00', available: true },
    { time: '16:00', available: true },
    { time: '17:00', available: true },
  ];

  const handleTimeClick = (selectedTime) => {
    setFormData({
      ...formData,
      time: selectedTime
    });
  };

  let availableTimes;
  if (formData.meetUpPlace === 'meet-up') {
    availableTimes = formData.isWeekend ? weekendTimes : weekdayTimes;
  } else {
    availableTimes = whatsappDirectCallTimes;
  }

  let meetUpPlaceOptions = null;
  if (formData.meetUpPlace === 'meet-up') {
    meetUpPlaceOptions = (
      <div className="mb-4 mt-3">
        <label htmlFor="meetUpPlace">Preferred Meet-up Place: </label>
        <select
          id="meetUpPlace"
          name="meetUpPlace"
          value={formData.meetUpPlace}
          onChange={handleChange}
          required
          className='box pl-2'
        >
          <option value="McDonalds">McDonalds - Cape Road</option>
          <option value="Seattle Coffee Shop">Seattle Coffee Co. - Cape Road</option>
          {/* Add more options as needed */}
        </select>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 mt-14">Thank You!</h2>
        <p className="mb-4">Thank you for contacting us. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 mt-14">Request Meeting</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className='box pl-2'
            placeholder="Enter your full-name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className='box pl-2'
            placeholder="xyz@gmail.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className='box pl-2'
            placeholder="0123456789"
          />
        </div>
        <div className="mb-4 mt-3">
          <label htmlFor="contactMethod">I prefer ?: </label>
          <select
            id="contactMethod"
            name="meetUpPlace"
            value={formData.meetUpPlace}
            onChange={handleChange}
            required
            className='box pl-2'
          >
            <option value="whatsapp">WhatsApp</option>
            <option value="direct call">Direct Call</option>
            <option value="face to face">Face-to-Face</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-1">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Time:</label>
          <div>
            {availableTimes.map((timeSlot) => (
              <button
                key={timeSlot.time}
                type="button"
                onClick={() => handleTimeClick(timeSlot.time)}
                className={`mr-2 mb-2 px-4 py-2 rounded-md ${timeSlot.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'} ${formData.time === timeSlot.time ? 'bg-blue-500' : ''}`}
              >
                {timeSlot.time}
              </button>
            ))}
          </div>
        </div>
        {meetUpPlaceOptions}
        <div className="mb-4">
          <label htmlFor="message">Message(optional):</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className='box pl-2'
            placeholder="Why l want to contact you...."
          />
        </div>
        <button type="submit" className='box p-3'>Submit</button>
      </form>
    </div>
  );
};

export default RequestMeeting;

// CODE DESCRIPTION:
///////////////////////////////////////
// The `RequestMeeting` component is a React component that allows users to request a meeting or book a call by providing their name, email, phone number, preferred contact method, date, time, preferred meet-up place, and an optional message. 

// It dynamically displays available times based on the selected contact method (WhatsApp/Direct Call or Face-to-Face) and whether it's a weekend or weekday. Users can select a date from a calendar input and choose a time from the available options. 

// If the user selects "Face-to-Face" as the preferred contact method, they can also choose their preferred meet-up place. 

// Once all the required information is filled out, the user can submit the form, and the data will be logged to the console (placeholder for backend integration or further processing). 

// The component utilizes React's state management to capture and update form data and handles user interactions such as input changes and button clicks. It also uses conditional rendering to show or hide certain form elements based on user selections. The component is styled using Tailwind CSS for a clean and responsive design.

// handling the events on input data
