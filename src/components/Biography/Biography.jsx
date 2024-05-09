import React from "react";
import "./Biography.css";
import MyCV from "../../assets/CV/Front-End-Dev-Katherine-Negrete.pdf";
import MyPhoto from "../../assets/biography/kathy.jpeg"

const Biography = () => {
  return (
    <section id="biography">
      <div className="biography-intro-text">
        <span>Hi, I'm Katherine!</span>
        <h1 className="title">
          Front End <br />
          Developer
        </h1>
        <p>
          With over 1 year of experience in user interface and web application
          development, I am committed to creating impactful and functional
          digital experiences!
        </p>
        <a
          href={MyCV}
          className="dowloand-cv"
          download="Front-End-Dev-Katherine-Negrete.pdf"
        >
          Dowloand CV
        </a>
      </div>
      <div>
        <img className="photoBanner" src={MyPhoto} alt="" />
      </div>
    </section>
  );
};

export default Biography;
