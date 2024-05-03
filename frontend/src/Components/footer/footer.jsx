import React from 'react'
import { assets } from '../../assets/assets'
import './footer.css'

const Footer = () => {
    return (
      <div className='footer' id='footer'>
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" /> {/* Added alt text */}
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> {/* Closed the paragraph tag */}
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="Facebook" /> {/* Added alt text */}
              <img src={assets.twitter_icon} alt="Twitter" /> {/* Added alt text */}
              <img src={assets.linkedin_icon} alt="LinkedIn" /> {/* Added alt text */}
            </div>
          </div>
          <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          </ul>
          </div>
          <div className="footer-content-right">
            <h2>Getting Touch</h2>
            <ul>
            <li>+3251258122</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default Footer
