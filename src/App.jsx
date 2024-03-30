import { Route, Routes } from 'react-router-dom';

import { About, Intro, Testimonies, NavBar, Home } from './components';

function App() {
  return (
      <div>
        <NavBar />
        
        {/* The Routes should wrap all the Route components */}
        <Routes>
          <Route exact path='/' element={<Home/>}/> 
          <Route path='/Intro' element={<Intro/>}/>
          <Route path='/About'  element={<About/>}/>
          <Route path='/Testimonies'  element={<Testimonies/>}/>
        </Routes> 
      </div>
    
  );
}

export default App;

