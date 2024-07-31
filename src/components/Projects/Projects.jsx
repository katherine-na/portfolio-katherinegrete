import React from "react";
import ProjectItem from "./ProjectItem";
import './Projects.css';
import bookstore from '../../assets/projects/bookstore.png';
import sunshine from '../../assets/projects/sunshinee.png'
import planning from '../../assets/projects/planning.png'

const Projects = () => {
  return (
    <section id="my-projects">
      <div className="project-title">
        <h1>My Projects</h1>
      </div>
      <div className="project-items">
        <div className="p-item">
          <ProjectItem
            image={sunshine}
            name="Swimmwear Store"
            skills="HTML5, SASS, Javascript"
            description="Swimwear online shop with products displayed using images"
            demo="https://katherine-na.github.io/swimsuit-shop-project/marked/index.html"
            repo="https://github.com/katherine-na/swimsuit-shop-project"
          />
        </div>
        <div className="p-item">
          <ProjectItem
            image={planning}
            name="Daily Planning"
            skills="React, Next, Tailwind"
            description="An application to write down the things you have pending to do"
            demo="https://daily-planning-kna.netlify.app/"
            repo="https://github.com/katherine-na/DailyPlanning"
          />
        </div>
        <div className="p-item">
          <ProjectItem
            image={bookstore}
            name="Book Store"
            skills="Bootstrap"
            description="Awesome book gallery with insightful reviews about it"
            demo="https://katherine-na.github.io/gallery-project/"
            repo="https://github.com/katherine-na/gallery-project"
          />
        </div>
        {/* <div className="p-item">
          <ProjectItem
            image={projectImages(`./clock.png`)}
            name="Clock"
            skills="JavaScript"
            description="This is a web application that displays a real time clock"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
