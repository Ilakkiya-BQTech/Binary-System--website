import React, { useState, useEffect, useRef } from 'react';
import './card.css'
import Background from '../../Assets/background.webp'
const Slider = () => {
  const images = [
    {
      source: "https://www.binarysystemsinfo.com/assets/img/services/data-entry.jpg",
      title: "Data Entry/Processing"
    },
    {
      source:"https://www.binarysystemsinfo.com/assets/img/services/data-processing.jpg",
      title: "Variable Printing"
    },
    {
      source: "https://www.binarysystemsinfo.com/assets/img/services/pvc-janaadhar.jpg",
      title: "PVC/RFID Card manufacturing"
    },
    {
      source: "https://www.binarysystemsinfo.com/assets/img/services/laser-printing.jpg",
      title: "Scanning / Digitization"
    },
    {
      source: "https://www.binarysystemsinfo.com/assets/img/services/photo-imaging.jpg",
      title: "End to End Examination / Result Processing"
    },
    {
      source: "https://www.binarysystemsinfo.com/assets/img/services/web-designing.jpg",
      title: "E-Governance Services"
    },
    
  ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(images[slideNumber]?.source);
  const sliderRef = useRef(null);
  const nextArrow = useRef(null);

  const navigationHandle = (direction) => {
    let newSlideNumber;
    const totalNoofSlides = images.length - 1;
    direction === "left"
      ? (newSlideNumber = slideNumber === 0 ? totalNoofSlides : slideNumber - 1)
      : (newSlideNumber =
          slideNumber === totalNoofSlides ? 0 : slideNumber + 1);
    setSlideNumber(newSlideNumber);
    setBackgroundImage(Background);
    
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextArrow.current.click();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='services'>
    <div className="sliderWrapper" >
        
      {images.length > 0 ? (
        <>
          <h5 className="sliderTitle">Card Designs</h5>
          <button className="prevArrow" onClick={() => navigationHandle("left")}>
            «
          </button>
          <div className="slider" ref={sliderRef}>
            {images.map((image, index) => (
              <div key={index} className={`slide${index === slideNumber ? " active" : ""}`}>
                {image.source && <img src={image.source} alt={image.title} loading="lazy" draggable={false} />}
                {image.title && <h3>{image.title}</h3>}
              </div>
            ))}
          </div>
          <button className="nextArrow" onClick={() => navigationHandle("right")} ref={nextArrow}>
            »
          </button>
          <div className="sliderPagination">
            {slideNumber + 1} / {images.length}
          </div>
        </>
      ) : (
        <div>No slides available..</div>
      )}
    </div>
    </div>
  );
};

export default Slider;



