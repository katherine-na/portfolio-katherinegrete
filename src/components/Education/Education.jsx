import React from "react";
import EducationItem from "./EducationItem";
import './Education.css'

const Education = () => {
  return (
    <div className="education-wrap">
      <div>
        <h2 className="education-title">My Education</h2>
      </div>
      <div className="education-container">
        <EducationItem/>
    </div>
     
    </div>
  );
};

export default Education;
