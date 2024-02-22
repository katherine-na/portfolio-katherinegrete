import React from "react";
import Experience from "./Experience";
import knowledgize from "../../assets/experience/knowledgize.png";
import vinneren from "../../assets/experience/vinneren.png";
import geniallabs from "../../assets/experience/geniallabs.png";

const ExperienceItem = () => {

  return (
    <div className="experience-section">
      <div className="experience-title">
        <h2>My Experience</h2>
      </div>
      <div className="experience-item">
        <Experience
          link="https://genial-labs.com/"
          company={geniallabs}
          companyLink="https://genial-labs.com/"
          companyName="Genial Labs LLC"
          companyDate="July 2020 - March 2022 (8 months)"
          stack="Stack: WordPress, Microsoft Office, MacOS, Google Apps, Terminal, Figma, Bash, VSCODE, Slack"
          companyStasks="Help with editing image files"
          companyStasks1="Documentation Labeling data"
          companyStasks2="Data extraction, data entry"
          companyStasks3="Screenshots, testing"
        />
        <Experience
          link="https://www.knowledgize.com/en"
          company={knowledgize}
          companyLink="https://www.knowledgize.com/en"
          companyName="Knowledgize"
          companyDate="May 2022 - Oct 2022 (5 months)"
          stack="Stack: Git, GitHub, Bash, Linux, MacOS, HTML5, CSS3, Vue.js"
          companyStasks="Update & improve the appearance of Knowledgise web app"
          companyStasks1="Ensure the accurate translation of information & documentation"
          companyStasks2="Design implementation"
          companyStasks3="Investigation and development"
        />
        <Experience
          link="https://www.vinneren.com.mx/"
          company={vinneren}
          companyLink="https://www.vinneren.com.mx/"
          companyName="Vinneren eCommerce"
          companyDate="Oct 2022 - Current (1 year 4 months)"
          stack="Stack: VTEX, React.js, Sass, Bitbucket, Jira, Telegram, Slack"
          companyStasks="Front End Developer at Elektra (an outstanding Vinneren client)"
          companyStasks1="User Interface (UI) Development"
          companyStasks2="Development of interactive components"
          companyStasks3="Testing and debugging"
        />
      </div>
    </div>
  );
};

export default ExperienceItem;
