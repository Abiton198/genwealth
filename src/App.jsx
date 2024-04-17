import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About, Intro, Home, Guide, Questions, DarkMode, Gallery, NavBar, Footer } from './components';
import Translate from './utils/Translate'; // Adjust the import path if necessary

function App() {
  return (
    <div className='app-container'>
      <NavBar />
      <DarkMode>
        <Translate>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Intro' element={<Intro />} />
            <Route path='/Questions' element={<Questions />} />
            <Route path='/Gallery' element={<Gallery />} />
            <Route path='/Guide' element={<Guide />} />
            {/* Other routes */}
          </Routes>
        </Translate>
      </DarkMode>
      <Footer />
    </div>
  );
}

export default App;
