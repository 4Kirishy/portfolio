import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./ProjectCard.scss";

const ProjectCard = (props) => {
  const { title, description, usedTechnologies, img, link, gitHubLink } = props;
  return (
    <div className="projectCard">
      <img src={img} alt="project" />
      <div className="projectCardLinks">
        <a href={gitHubLink} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href={link} target="_blank" rel="noreferrer">
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className="projectCardTextBox">
        <h3 className="projectCardName">{title}</h3>
        <p className="projectCardDescription">{description}</p>
      </div>
      <ul className="projectCardTechList">
        {usedTechnologies.map((tech) => (
          <li key={tech} className="projectCardTechItem">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
