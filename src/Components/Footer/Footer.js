import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import Logo from '../../Assets/BinarySystemsLogo.png'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer-section">
    <div className="container">
        
        
            <div className="row">
                <div className="footer-widget">
                    <div className="footer-logo">
                        <a href="index.html"><img src={Logo} className="img-fluid" alt="logo"/></a>
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
                <div className="footer-widget">
                    <div className="footer-widget-heading">
                        <h3>Subscribe</h3>
                    </div>
                    <div className="footer-text ">
                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                    </div>
                    <div className="subscribe-form">
                        <form action="#">
                            <input type="text" placeholder="Email Address"/>
                            <button><i className="fab fa-telegram-plane"></i></button>
                        </form>
                    </div>
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
        </div>
       
    </div>
    <div className="copyright-area">
        <div className="container">
            <div className="row">
                
                    <div className="copyright-text">
                        <p>Copyright &copy; 2022, Binary System

                        </p>
                    </div>
                
                    <div className="footer-menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Quality Control</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        
    </div>
</footer>

  )
}

export default Footer


// import React from 'react'
// import './footer.css'
// import Logo from '../../Assets/logo.png'
// import '@fortawesome/fontawesome-free/css/all.css';
// const Footer = () => {
//     return (
//         <footer className=Name="footer-section">
//             <div className=Name="container">

//                 <div className=Name="row">

//                     <div className=Name="single-cta">
//                         <i className=Name="fas fa-map-marker-alt"></i>
//                         <div className=Name="cta-text">
//                             <h4>Find us</h4>
//                             <span>B 5-6, Akshat Apartment, Bani Park, Jaipur 302 016 (India)</span>
//                         </div>


//                         <div className=Name="single-cta">
//                             <i className=Name="fas fa-phone"></i>
//                             <div className=Name="cta-text">
//                                 <h4>Call us</h4>
//                                 <span>1414023456</span>

//                             </div>


//                             <div className=Name="single-cta">
//                                 <i className=Name="far fa-envelope-open"></i>
//                                 <div className=Name="cta-text">
//                                     <h4>Mail us</h4>
//                                     <span>mail@info.com</span>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//                 <div className=Name="footer-content pt-5 pb-5">
//                     <div className=Name="row">

//                         <div className=Name="footer-widget">
//                             <div className=Name="footer-logo">
//                                 <a href="index.html"><img src={Logo} className=Name="img-fluid" alt="logo" /></a>
//                             </div>
//                             <div className=Name="footer-text">
//                                 <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
//                                     elit,Lorem ipsum dolor sit amet.</p>
//                             </div>
//                             <div className=Name="footer-social-icon">
//                                 <span>Follow us</span>
//                                 <a href="#"><i className=Name="fab fa-facebook-f facebook-bg"></i></a>
//                                 <a href="#"><i className=Name="fab fa-twitter twitter-bg"></i></a>
//                                 <a href="#"><i className=Name="fab fa-google-plus-g google-bg"></i></a>
//                             </div>

//                         </div>

//                         <div className=Name="footer-widget">
//                             <div className=Name="footer-widget-heading">
//                                 <h3>Useful Links</h3>
//                             </div>
//                             <ul>
//                                 <li><a href="#">Home</a></li>
//                                 <li><a href="#">about</a></li>
//                                 <li><a href="#">services</a></li>
//                                 <li><a href="#">portfolio</a></li>
//                                 <li><a href="#">Contact</a></li>
//                                 <li><a href="#">About us</a></li>
//                                 <li><a href="#">Our Services</a></li>
//                                 <li><a href="#">Expert Team</a></li>
//                                 <li><a href="#">Contact us</a></li>
//                                 <li><a href="#">Latest News</a></li>
//                             </ul>

//                         </div>

//                         <div className=Name="footer-widget">
//                             <div className=Name="footer-widget-heading">
//                                 <h3>Subscribe</h3>
//                             </div>
//                             <div className=Name="footer-text mb-25">
//                                 <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
//                             </div>
//                             <div className=Name="subscribe-form">
//                                 <form action="#">
//                                     <input type="text" placeholder="Email Address" />
//                                     <button><i className=Name="fab fa-telegram-plane"></i></button>
//                                 </form>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className=Name="copyright-area">
//                 <div className=Name="container">
//                     <div className=Name="row">

//                         <div className=Name="copyright-text">
//                             <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
//                         </div>
//                     </div>
//                     <div className=Name="col-xl-6 col-lg-6 d-none d-lg-block text-right">
//                         <div className=Name="footer-menu">
//                             <ul>
//                                 <li><a href="#">Home</a></li>
//                                 <li><a href="#">Terms</a></li>
//                                 <li><a href="#">Privacy</a></li>
//                                 <li><a href="#">Policy</a></li>
//                                 <li><a href="#">Contact</a></li>
//                             </ul>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }

// export default Footer

