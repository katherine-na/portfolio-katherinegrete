import { useState } from "react";
import Certification from "./Certification";
import certbach from "../../assets/certification/certcolbach.png";
import certhtml from "../../assets/certification/cert-html.png";
import certcss from "../../assets/certification/cert-css.png";
import certjs from "../../assets/certification/cert-js.png";
import certrd from "../../assets/certification/cert-rd.png";
import certudemy from "../../assets/certification/cert-udemy.jpeg";
import certga from "../../assets/certification/GACERTF.jpg";
import certgtm from "../../assets/certification/GTMCERT.jpg";
import certciberse from "../../assets/certification/cert-ciberse.png";
import vtex from "../../assets/certification/vtex.png";
import coursera from "../../assets/school/coursera.png";
import udemy from "../../assets/school/udemy.png";
import vtexLogo from "../../assets/school/vtex.png";
import deltaProtect from "../../assets/school/delta-protect.webp";
import "./Certifications.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    id: 1,
    title: "Introduction to HTML5",
    year: 2022,
    schoolName: "Coursera",
    schoolLogo: coursera,
    certificateUrl:
      "https://coursera.org/share/3b7c5fd9527c351ecd70967edf5f0ed9",
    thumbnailUrl: certhtml,
  },
  {
    id: 2,
    title: "Introduction to CSS3",
    year: 2022,
    schoolName: "Coursera",
    schoolLogo: coursera,
    certificateUrl:
      "https://coursera.org/share/143dc48c9849d98c8b9404ad336c9925",
    thumbnailUrl: certcss,
  },
  {
    id: 3,
    title: "Responsive Design",
    year: 2022,
    schoolName: "Coursera",
    schoolLogo: coursera,
    certificateUrl:
      "https://coursera.org/share/237a947e8c8682338c916ae88beffabb",
    thumbnailUrl: certrd,
  },
  {
    id: 4,
    title: "Introduction to JavaScript",
    year: 2022,
    schoolName: "Coursera",
    schoolLogo: coursera,
    certificateUrl:
      "https://coursera.org/share/fd2cda2080f5e301735f3b38099d4d52",
    thumbnailUrl: certjs,
  },
  {
    id: 5,
    title: "ReactJs + NextJs",
    year: 2023,
    schoolName: "Udemy",
    schoolLogo: udemy,
    certificateUrl: "https://www.udemy.com/certificate/UC-52db33ad-74d2-4b35-87fa-8c9e754fa006/",
    thumbnailUrl: certudemy,
  },
  {
    id: 6,
    title: "Google Analytics",
    year: 2023,
    schoolName: "Udemy",
    schoolLogo: udemy,
    certificateUrl: "https://drive.google.com/file/d/1wbr-jGfmRwL9Q89u-03qyZ56wPzUxgiR/view?usp=sharing",
    thumbnailUrl: certga,
  },
  {
    id: 7,
    title: "Google Tag Mannager",
    year: 2023,
    schoolName: "Udemy",
    schoolLogo: udemy,
    certificateUrl: "https://drive.google.com/file/d/1VIWeCbc7LoUrq1ohsQa8UosKEfqQlmU4/view?usp=sharing",
    thumbnailUrl: certgtm,
  },
  {
    id: 8,
    title: "VTEX IO",
    year: 2023,
    schoolName: "VTEX",
    schoolLogo: vtexLogo,
    certificateUrl: "https://drive.google.com/file/d/1E_e5zUTIpu7Sq7PftNyjbhG03ih6YYUV/view?usp=sharing",
    thumbnailUrl: vtex,
  },
  {
    id: 9,
    title: "Cybersecurity Training",
    year: 2024,
    schoolName: "Delta Protect",
    schoolLogo: deltaProtect,
    certificateUrl: "https://drive.google.com/file/d/1ZwFacSlJ-t6WP_8j_O3KuuAXlW0zzTT-/view?usp=sharing",
    thumbnailUrl: certciberse,
  },
];

const Certifications = () => {
  const [showMore, setShowMore] = useState(false);
  const initialDisplayCount = 3;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const handleMore = () => {
    if (!showMore) {
      setDisplayCount(data.length);
    } else {
      setDisplayCount(initialDisplayCount);
    }
    setShowMore(!showMore);
  };

  return (
    <div id="my-certifications">
      <div className="title-container">
        <h2>Certifications</h2>
      </div>
      <div className="cert-container">
        {data.slice(0, displayCount).map((cert) => (
          <Certification key={cert.id} certificate={cert} />
        ))}
      </div>
      <div className="btn-more-container">
        <button className="btn-more" onClick={handleMore}>
          {showMore 
            ? `Ver menos`
            : "Ver más"
          }
        </button>
      </div>
    </div>
  );
};

export default Certifications;
