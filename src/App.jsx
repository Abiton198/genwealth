import React from 'react'
import { Intro, Questions ,Testimonies, Welcome} from './components'




const App = () => {
  return (
    <div className=' flex flex-col items-center justify-evenly h-screen m-2 p-2 bg-green'>
      <Welcome/>
      <Intro/>
      <Testimonies/>
      <Questions />

    </div>
  )
}
export default App
