import React from "react";

const ProjectItem = (props) => {
  return (
    <section id="project">
      <div className="projects-wrapper">
        <div className="project">
          <div className="project-thumbnail">
            <img src={props.image} className="project-image" alt="projects"/>
          </div>
          <div className="project-description">
            <h3 className="p-title">{props.name}</h3>
            <p className="p-skills">{props.skills}</p>
            <p className="p-description">{props.description}</p>
          </div>
        </div>
        <div className="project-buttons">
          <div className="demo">
            <a href={props.demo} target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
          <div className="repo">
            <a href={props.repo} target="_blank" rel="noopener noreferrer">Repository</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;
