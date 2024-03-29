import React from 'react';
import { Intro, Questions, Testimonies, Welcome, NavBar } from './components';


// Main App Component
const App = () => {
  return (
    <div>
      <NavBar />
      <div className='flex flex-col items-center justify-evenly h-screen m-2 p-2 bg-green'>
        <Welcome />
        <Intro />
        <Testimonies />
        <Questions />
      </div>
    </div>
  );
};

export default App;

