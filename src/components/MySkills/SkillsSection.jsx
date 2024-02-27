import React from 'react';
import Skills from './Skills';
import './Skills.css'

const SkillsSection = () => {
    return (
        <section id="skills">
        <div className="skills-subtitle">
          <h2>My skills</h2>
          <p>
            I took online courses in various education platforms where I studied
            front end technologies
          </p>
        </div>
        <div className="skills-items">
          <Skills/>
        </div>
        </section>
    )
}

export default SkillsSection;