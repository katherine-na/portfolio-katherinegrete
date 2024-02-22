import React from "react";
import "./Experience.css";

const Experience = (props) => {

  return (
    <section id="my-experience">
      <div className="image-container">
        <a href={props.link} target="_blank">
          <img src={props.company} className="company-img" alt="companies" />
        </a>
        <div className="line">{props.line}</div>
      </div>
      <a className="company-name" href={props.companyLink}>{props.companyName}</a>
      <p className="company-location">{props.companyLocation}</p>
      <p className="company-date">{props.companyDate}</p>
      <p className="company-tools">{props.stack}</p>
      <ul>
        <li>{props.companyStasks}</li>
        <li>{props.companyStasks1}</li>
        <li>{props.companyStasks2}</li>
        <li>{props.companyStasks3}</li>
      </ul>
    </section>
  );
};

export default Experience;
