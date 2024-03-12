import React from 'react';
import './contact.css'


const ContactForm = () => {
    
  return (
    <div className='contact-page'>
    <div className="contact-form-container">
      <div className="contact-us">
        <div className="contact-header">
          <div className='contact'>CONTACT US</div>
        </div>
        
      </div>
      <div className="contact-title">
        <h1>Let's Get Started</h1>
        <h2>Contact us to start your next project!</h2>
      </div>
      <div className="address">
        <i className="fas fa-map-marker-alt"></i>
        <h3>B 5-6, Akshat Apartment, Bani Park,</h3>
        <h3>Jaipur 302 016 (India)</h3>
      </div>
      <div className="phone">
        <i className="fas fa-phone-alt"></i>
        <h3>141 287 57868</h3>
      </div>
      <div className="email">
        <i className="fas fa-envelope"></i>
        <h3>binarysystems125@gmail.com</h3>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Tell us about your project..."></textarea>
          <button type="button">SEND</button>
        </form>
      </div>
    </div>
    
    

    </div>
  );
};

export default ContactForm;
