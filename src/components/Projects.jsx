import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projectsContainer">
        <h2 className="projectsTitle">Projects.</h2>
        <div className="porjectsCards">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
