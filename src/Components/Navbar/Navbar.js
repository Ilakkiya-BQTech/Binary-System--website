import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import Logo from '../../Assets/BinarySystemsLogo.png'

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <div className="header">
      <div className='logo'>
        <img src={Logo} alt='' />
      </div>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">About Us</a>
        <a href="/#">Services</a>
        <a href="/#">IndustriesCatered</a>
        <a href="/#">Major Projects</a>
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

