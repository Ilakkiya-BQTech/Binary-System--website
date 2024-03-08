import React, { useEffect, useState } from 'react';
import './serviceContainer.css'; // Import your CSS file
import Image1 from '../../Assets/data-entry.jpg';
import Image2 from '../../Assets/data-processing.jpg';
import Image3 from '../../Assets/education.jpg';
import Image4 from '../../Assets/exam-end-toend.jpg';
import Image5 from '../../Assets/hardware.jpg';
import Image6 from '../../Assets/govt-semi.jpg';

const services = [
  { image: Image1, title: 'PVC/RFID Card manufacturing', description: 'With the recent technological boost & IT revolution, digitization and e-governance happening all around, various Governments, Educational & Corporate ...' },
  { image: Image2, title: 'Data Entry / Processing', description: 'Data Entry / Processing Today Variable Data Printing (VDP) is an integral part of printing and processing as it caters to a large volume of customers. It automates the process ...' },
  { image: Image3, title: 'Variable Printing', description: 'At Binary we offer premier solutions to the clients for their information processing needs. The company has state-of-the-art systems and technologies to provide professional services..' },
  { image: Image4, title: 'Scanning / Digitization', description: 'In todays age, Digitization has become a necessity for most of the organizations to reduce the dependency on physical storage and space required for the same.' },
  { image: Image5, title: 'End to End Examination / Result Processing', description: 'To compliment the Educational Stationeries printing Binary has been actively involved in Exam Result Processing, for many well known ..' },
  { image: Image6, title: 'E-Governance Services', description: 'Binary has initiated its efforts towards providing its clients complete Internet based soloutions for their emerging requirements of the Internet age.' },
];
const ServiceBox = ({ image, title, description,handleClick }) => {
  const isMobile = window.innerWidth <= 1024;

 
    return (
      <div>
          <div className="service-box" onClick={() => handleClick(title)}>
        <img src={image} alt={title} />
        <p className="service-name">{title}</p>
      </div>
      {isMobile &&
      <div style={{display:'flex', flexDirection:'column'}}>
      <div className='service-desc'> {description} </div>
      <button className='service-btn'>Read more</button>
      </div>
      }
      </div>
  
    );
  };
  
  
  const ServiceContainer = () => {
    const [selectedService, setSelectedService] = useState(null);
  
    const handleClick = (title) => {
      setSelectedService(services.find(service => service.title === title));
    };
  
    return (
      <div className="container">
        <div className="left">
          <h2>{selectedService ? selectedService.title : "Select a Service"}</h2>
          {selectedService && (
            <>
              <p>{selectedService.description}</p>
              <button className='left-button'>Know More</button>
            </>
          )}
        </div>
        <div className="right">
          <h2>Services</h2>
          <div className="service-container">
            {services.map((service, index) => (
              <ServiceBox key={index} image={service.image} title={service.title} description={service.description} handleClick={handleClick} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceContainer;