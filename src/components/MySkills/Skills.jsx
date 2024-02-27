import React from "react";
import HTML5Badge from '../../assets/skills/HTML5_badge.png';
import CSSImage from '../../assets/skills/css.svg.png';
import JSImage from '../../assets/skills/js.png';
import ReactImage from '../../assets/skills/react.png';
import NodeImage from '../../assets/skills/node.svg.png';
import GraphQLImage from '../../assets/skills/graphql.svg.png';
import BImage from '../../assets/skills/B.svg.png';
import SassImage from '../../assets/skills/sass.svg.png';
import VtexImage from '../../assets/skills/vtex.png';
import VscodeImage from '../../assets/skills/vscode.svg.png';
import AWSImage from '../../assets/skills/aws.png';
import git from '../../assets/skills/gitlogo.png';
import typescript from '../../assets/skills/typescript.png'
import next from '../../assets/skills/next.png'

const skillsImage = [
  HTML5Badge,
  CSSImage,
  JSImage,
  ReactImage,
  typescript,
  next,
  NodeImage,
  GraphQLImage,
  BImage,
  SassImage,
  VtexImage,
  VscodeImage,
  AWSImage,
  git,
];

const Skills = () => {
  return (
    <div className="item">
      {skillsImage.map((image, index) => (
        <img className="skill-image" key={index} src={image} alt="technologies"/>
      ))}
    </div>
  );
};

export default Skills;
