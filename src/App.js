import React from 'react'
import Slider from './Components/Services/Cards'
import ServiceContainer from './Components/ServiceContainer/ServiceContainer'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      
      <ServiceContainer/>
      <Slider/>
   
    </div>
  )
}

export default App

