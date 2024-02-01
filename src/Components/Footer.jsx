import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import ChatIcon from "@material-ui/icons/Chat"; // Import the ChatIcon
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/ahmedrazaharis" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/ahmed-raza-a974ab28a/" className="phone-link">
          
          <ChatIcon />
        </a>
        <a href="https://www.linkedin.com/in/your_linkedin_username" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2024 ahmedtech.com</p>
    </div>
  );
}

export default Footer;


