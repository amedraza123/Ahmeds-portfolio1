import React from "react";
import { FaInstagram, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/ahmedrazaharis" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="mailto:uniformedtornado@gmail.com" className="phone-link">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/your_linkedin_username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p>&copy;  2024 ahmedtech.com</p>
    </div>
  );
}

export default Footer;

