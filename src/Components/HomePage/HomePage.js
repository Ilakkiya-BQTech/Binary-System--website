import React from 'react'

import '../../App.css'
import Navbar from '../Navbar/Navbar'
import Hero from './HeroSection/Hero'
import ServiceContainer from './ServiceContainer/ServiceContainer'
import Slider from './CardDesigns/Cards'
import ContactForm from './Contact/Contact'
import ClientCarousel from './ClientSection/Client'
import Footer from '../Footer/Footer'
const HomePage = () => {
  return (
    <div>
     
      <Hero/>
      <ServiceContainer/>
      <Slider/>
      <ContactForm/>
      <ClientCarousel/>
     
       
    </div>
  )
}

export default HomePage
