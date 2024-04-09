import { Route, Routes } from 'react-router-dom';

import { About, Intro, Testimonies, Home, Sidebar, Guide , Questions, DarkMode} from './components';
import Navbar from './components/NavBar';

function App() {
  return (
      <div>
        {/* <Sidebar/> */}
        <Navbar/>
       
       {/* DarkMode is triggering dark and light mode */}
        <DarkMode>
          {/* The Routes should wrap all the Route components */}
          <Routes>
            <Route exact path='/' element={<Home/>}/> 
            <Route path='/Intro' element={<Intro/>}/>
            <Route path='/About'  element={<About/>}/>
            <Route path='/Questions'  element={<Questions/>}/>
            <Route path='/Testimonies'  element={<Testimonies/>}/>
            <Route path='/Guide'  element={<Guide/>}/>
          </Routes> 

          </DarkMode>
      </div>
    
  );
}

export default App;

