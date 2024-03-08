import React from 'react'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Slider from './Components/Services/Cards'
import ServiceContainer from './Components/ServiceContainer/ServiceContainer'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ContactForm from './Components/Contact/Contact'
import ClientCarousel from './Components/ClientSection/Client';


const App = () => {
  return (
    <div className='App'>
      
      <Navbar/>
      <Slider/>
      <ServiceContainer/>
      <ContactForm />
      <ClientCarousel/>
     <Footer/>
   
    </div>
  )
}

export default App

