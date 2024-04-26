import React from "react";
import "./NavigationBar.css";
import myPhoto from "../../assets/biography/kathy.jpeg";
import github from "../../assets/socialMedia/github.png";
import linkeding from "../../assets/socialMedia/linkeding.jpeg";

const NavigationBar = () => {
  return (
    <section id="NavigationBar">
      <div className="navbar-banner-mobile">
        {/* <img className="mobile-photo" src={myPhoto} alt="" /> */}
      </div>
      <div className="navigation-bar-wrapper">
        <div className="navigation-bar-btns">
          <img className="navigation-bar-btn" src={linkeding} alt="" />
          <a
            href="https://www.linkedin.com/in/katherine-negrete-07b65b240/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
        <div className="navigation-bar-btns">
          <img className="navigation-bar-btn" src={github} alt="" />
          <a
            href="https://github.com/katherine-na"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default NavigationBar;
