import React from 'react';
import '../Styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import solid icons

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-column1">
          <img src="/Images/logo.png" alt="Logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, excepturi.</p>
        </div>
        <div className="footer-column2">
          <h6>Get in Touch</h6>
          <p>Address</p>
          <p>amosis@gmail.com</p>
          <p>8748239</p>
        </div>
        <div className="footer-column3">
          <h6>Quick Links</h6>
          <div className="column3-links">
            <div className="column3-links1">
              <p>Home</p>
              <p>About</p>
              <p>Services</p>
              <p>Team</p>
            </div>
            <div className="column3-links2">
              <p>Contact</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>FAQ</p>
            </div>
          </div>
        </div>
        <div className="footer-column4">
          <h6>Our Newsletter</h6>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
              Signup
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <hr />
        <div className="copyright-container">
          <div className="left">
            &copy; 2024 Designed by Sowndarya
          </div>
          <div className="right">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} style={{ color: '#4267B2', fontSize: '1.5rem', marginRight: '10px' }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2', fontSize: '1.5rem', marginRight: '10px' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{ color: '#E1306C', fontSize: '1.5rem', marginRight: '10px' }} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077b5', fontSize: '1.5rem' }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

