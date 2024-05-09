import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About, Intro, Home, Guide, Questions, Gallery, NavBar, Footer, CommentForm } from './components';

function App() {
  const handleSubmit = (comment) => {
    // Handle form submission (send data to backend)
    console.log('Submitted comment:', comment);
  };
  return (
    <div className='app-container'>
      <NavBar />
      
      {/* <h1 className='text-black text-3xl mt-10'>Comment Form</h1>
      <CommentForm onSubmit={handleSubmit} /> */}
      
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Intro' element={<Intro />} />
            <Route path='/Questions' element={<Questions />} />
            <Route path='/Gallery' element={<Gallery />} />
            <Route path='/Guide' element={<Guide />} />

            {/* Other routes */}
          </Routes>
     

      {/* <Footer /> */}
    </div>
  );
}

export default App;
