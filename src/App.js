import React from 'react'
import Slider from './Components/Services/Cards'
import ServiceContainer from './Components/ServiceContainer/ServiceContainer'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Slider/>
      <ServiceContainer/>
     {/* <Footer/> */}
   
    </div>
  )
}

export default App

