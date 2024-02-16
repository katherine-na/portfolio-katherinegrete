import React from "react";
import './Footer.css'
import github from "../../assets/socialMedia/github.png";
import linkeding from "../../assets/socialMedia/linkeding.jpeg";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-social-media">
        <a href="https://github.com/katherine-na" target="_blank" rel="noopener noreferrer" >
            <img className="footer-image" src={github} alt="logo-github"/>
        </a>
        <a href="https://www.linkedin.com/in/katherine-negrete-07b65b240/" target="_blank" rel="noopener noreferrer">
            <img className="footer-image" src={linkeding} alt="logo-linkeding"/>
        </a>
      </div>
      <div className="footer-info">
        <p>© Handcrafted by Katherine Negrete 2022</p>
        <p>CDMX, México</p>
      </div>
    </section>
  );
};

export default Footer;
