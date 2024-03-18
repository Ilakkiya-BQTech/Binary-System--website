import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import Logo from '../../Assets/BinarySystemsLogo.png';
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();



  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="header">
      <div className='logo'>
        <img src={Logo} alt='' />
      </div>
      <nav ref={navRef}>
      <a href="/#">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="/service">Services</a>
        <a href="/#">Card Designs</a>
        <a href="/project">Major Projects</a>
        <a href="/#">Contact</a>

        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;


