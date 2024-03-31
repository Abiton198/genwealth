import { Route, Routes } from 'react-router-dom';

import { About, Intro, Testimonies, Home, Sidebar, SignUp } from './components';

function App() {
  return (
      <div>
        <Sidebar/>
       
        
        {/* The Routes should wrap all the Route components */}
        <Routes>
          <Route exact path='/' element={<Home/>}/> 
          <Route path='/Intro' element={<Intro/>}/>
          <Route path='/About'  element={<About/>}/>
          <Route path='/Testimonies'  element={<Testimonies/>}/>
          <Route path='/SignUp'  element={<SignUp/>}/>
        </Routes> 
      </div>
    
  );
}

export default App;

