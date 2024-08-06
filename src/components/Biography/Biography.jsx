import React from "react";
import "./Biography.css";
import MyCV from "../../assets/CV/Front-End-Developer_Katherine_Negrete_EN.pdf";
import MyPhoto from "../../assets/biography/kathy.jpeg";

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
          With over 2 years of experience in front-end development, I am
          committed to building intuitive and visually compelling user
          interfaces!
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
