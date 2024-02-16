import React from "react";
import "./NavigationBar.css";
import myPhoto from "../../assets/biography/kathy.jpeg";
import github from "../../assets/socialMedia/github.png";
import linkeding from "../../assets/socialMedia/linkeding.jpeg";

const NavigationBar = () => {
  return (
    <section id="NavigationBar">
      <li className="navbar">
        <ul>Contact Me:</ul>
        <ul className="navbar-social">
          <a
            href="https://www.linkedin.com/in/katherine-negrete-07b65b240/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer-image"
              src={linkeding}
              alt="logo-linkeding"
            />
          </a>
        </ul>
        <ul className="navbar-social">
          <a href="https://github.com/katherine-na" target="_blank" rel="noopener noreferrer">
            <img
              className="footer-image"
              src={github}
              alt="logo-github"
            />
          </a>
        </ul>
      </li>
      <div className="navbar-banner-mobile">
        <img className="mobile-photo" src={myPhoto} alt="" />
      </div>
    </section>
  );
};

export default NavigationBar;
