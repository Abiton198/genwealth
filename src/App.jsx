import { Route, Routes } from 'react-router-dom';

import { About, Intro, Testimonies, Home, Sidebar, Guide , Layout, Questions} from './components';

function App() {
  return (
      <div>
        <Sidebar/>
       
       {/* Layout is triggering dark and light mode */}
        <Layout>
          {/* The Routes should wrap all the Route components */}
          <Routes>
            <Route exact path='/' element={<Home/>}/> 
            <Route path='/Intro' element={<Intro/>}/>
            <Route path='/About'  element={<About/>}/>
            <Route path='/Questions'  element={<Questions/>}/>
            <Route path='/Testimonies'  element={<Testimonies/>}/>
            <Route path='/Guide'  element={<Guide/>}/>
          </Routes> 

          </Layout>
      </div>
    
  );
}

export default App;

