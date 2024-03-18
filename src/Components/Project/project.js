import React from 'react'
import './project.css'
import Logo from '../../Assets/BinarySystemsLogo.png'
import ClientCarousel from '../HomePage/ClientSection/Client'
import ContactForm from '../HomePage/Contact/Contact'
const Project = () => {
  return (
<>
<ClientCarousel/>
<div className='project-title'>Major  Projects</div>
    <div className='timeline'>
     
    <div className='project-container left-project-container'>
      
        <img src='https://www.binarysystemsinfo.com/assets/img/services/chief-election-officer-mp.jpg' alt='' />
        <div className='text-box'>
          <h2>
          Electoral Photo ID Card and Electoral Roll.
          </h2>

          <p>Binary Systems plays leading roll in the field of preparation of photo electoral roll and photo id cards of the electors. We have done this work in 6 Major states of our country.We have prepared and supplied more than 50 Million PVC EPIC cards .</p>
          <span className='left-project-container-arrow'></span></div>
      </div>
      <div className='project-container right-project-container'>
        <img src='https://presentations.gov.in/wp-content/uploads/2020/06/Aadhaar_Preview.png?x76386' alt='' />
        <div className='text-box'>
          <h2>
            Aadhaar Enrollment
          </h2>

          <p>UIDAI has empanelled Binary Systems as a Empenelled Agency for Aadhaar enrolment for Citizens in T2 category. We have Captured the Biometric and Demographic data more than 50 lacks of the citizens. We have enrolled citizens from remote area as well as municipal areas and organised more than 10000 field camps.</p>
          <span className='right-project-container-arrow'></span>
        </div>
      </div>
      <div className='project-container left-project-container'>
      
        <img src='https://www.binarysystemsinfo.com/assets/img/services/rsrtc.jpg' alt='' />
        <div className='text-box'>
          <h2>
            National Papulation Register
          </h2>

          <p>We have done data entry work for Senses-2011 in which we have secured the work from ITI Ltd. (PSU) in Thane and Mumbai district of Maharashtra and Bhavnagar district of Gujarat State. We have entered Demographic Data more have 1.50 Crore of citizens.</p>
          <span className='left-project-container-arrow'></span></div>
      </div>
      <div className='project-container right-project-container'>
     
        <img src='https://www.mewareducation.in/new-images/emitra-inner.png ' alt='' />
        <div className='text-box'>
          <h2>
            E-Mitra Project as LSP of Rajasthan Government
          </h2>

          <p>In the E-Governance of Rajasthan Binary systems appointed as a Local Service Provider for 4 Districts of Rajasthan. The Main Responsibility of the Binary as a LSP is to Open and provide total technical support to E-Mitra Kiosk in municipal area as well as rural area. Binary Systems has more than 1500 E-Mitra Kiosk as on data.</p>
          <span className='right-project-container-arrow'></span>
        </div>
      </div>
      <div className='project-container left-project-container'>
      
        <img src='https://play-lh.googleusercontent.com/YK3smnLND9xFAeRHwzKLzY1uz_hUXN1RNpN8Q5-EW9_LAvsS467HKXTW2I3mdSLcRbI' alt='' />
        <div className='text-box'>
          <h2>
            Bhamashah / Jan Aadhaar enrolment
          </h2>

          <p>Government of Rajasthan has awarded us the work for enrolment of the citizens under the Bhamashah Scheme/ Jan Aadhaar scheme for 5 Districts and we have enrolled 40 lacks citizens.</p>
          <span className='left-project-container-arrow'></span>
        </div>
      </div>
      <div className='project-container right-project-container'>
   
        <img src='https://t4.ftcdn.net/jpg/05/04/29/09/360_F_504290924_AK49AKOGrubU4A7Q1GgaOdDaz0BIiTK5.jpg' alt='' />
        <div className='text-box'>
          <h2>
            End to End Examination / Result Processing.
          </h2>

          <p>Binary Systems is also working in the Online examination and result processing field. We have developed online systems for enrolling /registration of the students, Preparation of examination Admit Cards, Printing of Answer Books with OMR sheets and QR Code, Printing of the question paper at examination centre, Scanning of Answer Copies , Online evaluation of the Answer copy and Preparation of result and marksheets.

          </p>
          <span className='right-project-container-arrow'></span>
        </div>
      </div>
      <div className='project-container left-project-container'>
        <img src='https://www.binarysystemsinfo.com/assets/img/services/chief-election-officer-up.jpg' alt='' />
        <div className='text-box'>
          <h2>
            Aadhaar Document scanning.
          </h2>

          <p>We have scanned more than 5 crore Aadhaar Enrolment documents. This scanning job awarded us by RISL (UIDAI-Registrar).</p>
          <span className='left-project-container-arrow'></span>
        </div>
      </div>
      <div className='project-container right-project-container'>
        <img src='https://ovtechnology.in/skin/allfiles/img/logo/rkvl-logo.png' alt='' />
        <div className='text-box'>
          <h2>
            Service Provider for RKCL.
          </h2>

          <p>Binary Systems is also knowledge partner and working as a LSP of RKCL.</p>
          <span className='right-project-container-arrow'></span>
        </div>
      </div>
      <div className='project-container left-project-container'>
        <img src='https://kamadgiripay.org/images/icon/6837b52d-5cb7-40a3-b831-35afb02863c1.png' alt='' />
        <div className='text-box'>
          <h2>
            Channel Partner of HDFC Fast Tag distribution.
          </h2>

          <p>HDFC bank authorised Binary systems as a channel Partner for selling of Fast-Tag. We have opened morethan500 kiosk at Toll Plaza to facilitate citizens for buying instant fast-tag.</p>
          <span className='left-project-container-arrow'></span>
        </div>
      </div>


    </div>
    <ContactForm/>
    </>
  )
}

export default Project

