import React from 'react';
import './hero.css';
import '@fortawesome/fontawesome-free/css/all.css'; 


const Hero = () => {
    return (
        <div className='hero-section'>
           <div className='info'>
                <img src="https://img.logoipsum.com/245.svg" alt="Logo" />
                <div className="blob" id="blob1"></div>
                <div className="blob" id="blob2"></div>
                <div className="blob" id="blob3"></div>
                <svg id="line" viewBox="0 0 500 500" width="500" height="500">
                    <path style={{ strokeWidth: '3px', strokeLinecap: 'round', stroke: 'rgb(179, 192, 239)', paintOrder: 'stroke', fill: 'none' }} d="M 410.107 119.627 C 610.559 91.754 447.468 205.23 267.236 230.292 C 98.654 236.087 197.1 61.629 103.197 159.266 C 142.803 121.311 -69.077 302.058 126.896 342.895"></path>
                </svg>
            </div>
            <div className="content">
                <h1>Design Your Card</h1>
                <p>
                Empowering authenticity, crafting security. Your confidence, our priority.
                    <br />
                    Crafting confidence, shaping identities.
                </p>
                <div className='herosection-button'>
                    <button className='hero-button'><span></span>Get Started</button>
                    <button className='hero-button'><span></span>Find Your Design</button>
                </div>
                <div className="social">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </div>
        </div>
    );
}

export default Hero;



