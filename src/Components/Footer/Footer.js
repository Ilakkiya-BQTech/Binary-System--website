import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import Logo from '../../Assets/BinarySystemsLogo.png'
import './footer.css'
const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">


                <div className="row">
                    <div className="footer-widget">
                        <div className="footer-logo">
                            <a href="index.html"><img src={Logo} className="img-fluid" alt="logo" /></a>
                        </div>
                        <div className="footer-text">
                            <p>Binary Systems (GST No. 08ABEPA9306L1ZN) and (PAN No. ABEPA9306L) a proprietorship Firm and has it registered office at H-903, Sitapura Industrial Area, Phase-3, Jaipur – 302022 (Rajasthan)</p>
                        </div>

                    </div>
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Useful Links</h3>
                        </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">services</a></li>

                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Expert Team</a></li>
                            <li><a href="#">Contact us</a></li>

                        </ul>
                    </div>

                </div>
                <div className="row">

                    <div className="single-cta">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="cta-text">
                            <h4>Find us</h4>
                            <span>B 5-6, Akshat Apartment, Bani Park, Jaipur 302 016 (India)</span>
                        </div>

                    </div>

                    <div className="single-cta">
                        <i className="fas fa-phone"></i>
                        <div className="cta-text">
                            <h4>Call us</h4>
                            <span>9876543210 0</span>
                        </div>

                    </div>

                    <div className="single-cta">
                        <i className="far fa-envelope-open"></i>
                        <div className="cta-text">
                            <h4>Mail us</h4>
                            <span>mail@info.com</span>
                        </div>

                    </div>
                    <div className="single-cta">

                        <div className="social-footer">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>

                    </div>
                </div>

            </div>
            <div className="copyright-area">
            <p>Copyright &copy; 2022, Binary System</p>
                {/* <div className="footer-container">
                    <div className="copyright-text">
                        <p>Copyright &copy; 2022, Binary System

                        </p>
                    </div>
                    <div className="row">



                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Quality Control</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div> */}

            </div>
        </footer>

    )
}

export default Footer




