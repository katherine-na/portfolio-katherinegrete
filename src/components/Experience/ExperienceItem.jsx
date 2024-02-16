import React from "react";
import Experience from "./Experience";
import ravik from "../../assets/experience/ravik.png";
import knowledgize from "../../assets/experience/knowledgize.png";
import vinneren from "../../assets/experience/vinneren.png"

const ExperienceItem = () => {
  return (
    <div className="experience-section">
      <h2>My Experience</h2>
      <div className="experience-item">
      <Experience 
          company={ravik} 
          companyName="Assistant to Data Scientist"
          companyLocation="Ciudad de México"
          companyDate="Jul 2020 to Apr 2022"
          companyTools="WordPress, Microsoft Office, MacOS, Google Apps, Terminal, Figma, Bash, VSCODE, Slack"
          companyDescription="Help with editing image files, data extraction, documentation Labeling data, screenshots, data entry, testing, moving files and compression"
          />
        <Experience
          company={knowledgize}
          companyName="Knowledgize"
          companyLocation="Playa del Carmen"
          companyDate="23 May to 15 Oct 2022"
          companyTools="Git, GitHub, Bash, Linux, MacOS, HTML5, CSS3, Vue.js"
          companyDescription="Update & improve the appearance of Knowledgise web app Ensure the accurate translation of information & documentation"
        />
        <Experience 
          company={vinneren} 
          companyName="Vinneren eCommerce"
          companyLocation="Ciudad de México"
          companyDate="17 Oct to Present 2022"
          companyTools="VTEX, React.js, Sass, Bitbucket, Jira, Telegram, Slack"
          companyDescription="Front End Developer at Elektra (an outstanding Vinneren client). Currently building an internal software platform with React.js and Vtex"
          />
      </div>
    </div>
  );
};

export default ExperienceItem;
