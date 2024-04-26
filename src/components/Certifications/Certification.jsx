import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Certification = (props) => {
  console.log(props.certificate);

  return (
    <div className="certificate-item">
      <div className="certificate">
        <a href={props.certificate.certificateUrl} target="_blank">
          <img
            src={props.certificate.thumbnailUrl}
            className="image-certificate"
            alt="certificate"
          />
        </a>
      </div>
      <div className="certificate-info">
        <p>
          {props.certificate.title} <span>{props.certificate.year}</span>{" "}
          <span>
            <a href={props.certificate.certificateUrl} target="_blank">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </span>
        </p>
        <div className="school">
          <img
            className="school-logo"
            src={props.certificate.schoolLogo}
            alt=""
          />
          <span>{props.certificate.schoolName}</span>
        </div>
      </div>
    </div>
  );
};

export default Certification;
