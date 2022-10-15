import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./ProjectCard.scss";

const ProjectCard = (props) => {
  const { title, description, usedTechnologies, img, link, gitHubLink } = props;
  return (
    <div className="projectCard">
      <img src={img} alt="project image" />
      <div className="projectCardLinks">
        <a href={gitHubLink} target="_blank">
          <FaGithub />
        </a>
        <a href={link} target="_blank">
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className="projectCardTextBox">
        <h3 className="projectCardName">{title}</h3>
        <p className="projectCardDescription">{description}</p>
      </div>
      <ul className="projectCardTechList">
        {usedTechnologies.map((tech) => (
          <li className="projectCardTechItem">{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
