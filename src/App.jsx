import { Route, Routes } from 'react-router-dom';

import { About, Intro, Home, Guide , Questions, DarkMode, Gallery, NavBar, Footer, RequestMeeting} from './components';


function App() {
  return (
      <div className='app-container'>
        {/* <Sidebar/> */}
        <NavBar/>
       
       {/* DarkMode is triggering dark and light mode */}
        <DarkMode>
          {/* The Routes should wrap all the Route components */}
          <Routes>
            <Route exact path='/' element={<Home/>}/> 
            <Route path='/Intro' element={<Intro/>}/>
            <Route path='/About'  element={<About/>}/>
            <Route path='/Questions'  element={<Questions/>}/>
            <Route path='/Gallery'  element={<Gallery/>}/>
            <Route path='/Guide'  element={<Guide/>}/>
            <Route path='/RequestMeeting'  element={<RequestMeeting/>}/>
          </Routes> 
        </DarkMode>
          <Footer/>
      </div>
    
  );
}

export default App;

