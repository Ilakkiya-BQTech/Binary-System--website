import React, { useState,useEffect } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './services.css'
import ContactForm from '../HomePage/Contact/Contact';
import { useNavigate } from 'react-router-dom';
const Services = () => {
    const navigate=useNavigate();
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === slides.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? slides.length - 1 : slide - 1);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); 
        return () => clearInterval(interval); 
    }, [slide]);

    const slides = [
        {
            "src": "https://www.binarysystemsinfo.com/assets/img/services/data-entry.jpg",
            "alt": "Data Entry"
        },
        {
            "src": "https://www.binarysystemsinfo.com/assets/img/services/data-processing.jpg",
            "alt": "Data Processing"
        },
        {
            "src": "https://www.binarysystemsinfo.com/assets/img/services/pvc-cards.jpg",
            "alt": "Variable Printing"
        },
        {
            "src": "https://www.binarysystemsinfo.com/assets/img/services/laser-printing.jpg",
            "alt": "Data Entry"
        },

        {
            "src": "https://www.binarysystemsinfo.com/assets/img/services/egovernance.jpg",
            "alt": "Data Entry"
        },
    ]
    return (
        <div className='servicePage-container'>

            <div className="service-page">
                <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
                {slides.map((item, idx) => {
                    return (
                        <img
                            src={item.src}
                            alt={item.alt}
                            key={idx}
                            className={slide === idx ? "services-slide" : "services-slide slide-hidden"}
                        />
                    );
                })}
                <BsArrowRightCircleFill
                    onClick={nextSlide}
                    className="arrow arrow-right"
                />
                <span className="indicators">
                    {slides.map((_, idx) => {
                        return (
                            <button
                                key={idx}
                                className={
                                    slide === idx ? "indicator" : "indicator indicator-inactive"
                                }
                                onClick={() => setSlide(idx)}
                            ></button>
                        );
                    })}
                </span>
            </div>
            <div className='servicepage-container'>
                <div className='service-title'>Our Services</div>
                <div className="we-are-block">
                <h2>PVC/RFID – Card manufacturing</h2>
                    <div id="about-us-section">
                    
                        <div className="about-us-image">
                            <img src="https://image.made-in-china.com/202f0j00rauGZWLmgCbI/13-56MHz-PVC-I-Code-2-RFID-Cards-Contactless-Smart-Cards.webp" width="808" height="458" alt="Lobby Image" />
                        </div>
                        <div className="about-us-info">
                            
                            <p>Binary is providing its specialized services in the fields of Data Entry and Bulk Data Entry, to the utmost satisfaction of the clients with high standards of perfection and accuracy</p>
                            <a href="#" title="About Us Button">Know more</a>
                        </div>
                    </div>
                    <h2>Data Entry & Processing</h2>
                    <div id="history-section">
                        <div className="history-image">
                            <img src="https://www.binarysystemsinfo.com/assets/img/services/data-entry.jpg" width="951" height="471" alt="Building Pic" />
                        </div>
                        <div className="history-info">
                            
                            <p>Binary is providing its specialized services in the fields of Data Entry and Bulk Data Entry, to the utmost satisfaction of the clients with high standards of perfection and accuracy.</p>
                            <a href="#" title="History Button" onClick={() => { navigate("/data-entry") }}>Know more</a>
                        </div>
                    </div>
                </div>
                <div className="we-are-block">
                <h2>Variable Data Printing?</h2>
                    <div id="about-us-section">
                        <div className="about-us-image">
                            <img src="https://www.binarysystemsinfo.com/assets/img/services/data-processing.jpg" width="808" height="458" alt="Lobby Image" />
                        </div>
                        <div className="about-us-info">
                            
                            <p>Today Variable Data Printing (VDP) is an integral part of printing and processing as it caters to a large volume of customers. It automates the process so that each print product looks as if it has been exclusively designed and printed for an individual person. Smartly executed, it maximizes the relevance of your print product with your customers requirement.</p>
                            <a href="#" title="About Us Button">Know more</a>
                        </div>
                    </div>
                    <h2>Scanning / Digitization</h2>
                    <div id="history-section">
                        <div className="history-image">
                            <img src="https://www.binarysystemsinfo.com/assets/img/services/laser-printing.jpg" width="951" height="471" alt="Building Pic" />
                        </div>
                        <div className="history-info">
                            
                            <p>In today's age, Digitization has become a necessity for most of the organizations to reduce the dependency on physical storage and space required for the same. Digitization helps in consuming much less space in office and helps much quicker document search and availability, thereby enhancing organization's productivity.
                            </p>
                            <a href="#" title="History Button">Know more</a>
                        </div>
                    </div>

                </div>
                <div className="we-are-block">
                <h2>Result processing</h2>
                    <div id="about-us-section">
                        <div className="about-us-image">
                            <img src="https://www.binarysystemsinfo.com/assets/img/services/exam-end-toend.jpg" width="808" height="458" alt="Lobby Image" />
                        </div>
                        <div className="about-us-info">
                           
                            <p>To compliment the Educational Stationeries printing Binary has been actively involved in Exam Result Processing, for many well known Schools, Colleges, Universities as well as Private Institutions.We provide solutions for Result Processing apart from printing Admit cards , Answer Books with QR-Code and end products like OMR / OCR Forms.</p>
                            <a href="#" title="About Us Button">Know more</a>
                        </div>
                    </div>
                    <h2>E-Governance Services</h2>
                    <div id="history-section">
                        <div className="history-image">
                            <img src="https://www.binarysystemsinfo.com/assets/img/services/web-designing.jpg" width="951" height="450" alt="Building Pic" />
                        </div>
                        <div className="history-info">
                          
                            <p>With our E-Governance services we assist government interactions with citizens (G2C), businesses (G2B), employees (G2E) and help coordinate between the government departments and ministries (G2G), thus boosting quality of services and management of resources to ensure convenience and transparency within the system.
                            </p>
                            <a href="#" title="History Button">Know more</a>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm/>
        </div>
    )
}

export default Services