import React, { useState, useEffect, useRef } from 'react';
import './card.css'
import Card1 from '../../Assets/1.png'
import Card2 from '../../Assets/2.png'
import Card3 from '../../Assets/3.png'
import Card4 from '../../Assets/NE_F100.jpg'
import Card5 from '../../Assets/aayushman card rajasthan (front).jpg'

const Slider = () => {
  const images = [
    {
      source:Card1,
      title: "Card Pattern 1"
    },
    {
      source:Card2,
      title: "Card Pattern 2"
    },
    {
      source:Card3,
      title: "Card Pattern 3"
    },
    {
      source: Card4,
      title: "Card Pattern 4"
    },
    {
      source:Card5,
      title: "Card Pattern 5"
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
    // setBackgroundImage(Background);
    
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



