import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";
import AnimationWrapper from "../layouts/AnimationWrapper";
import Socials from "./Socials";

const Projects = () => {
  return (
    <>
      <AnimationWrapper>
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
      </AnimationWrapper>
      <Socials />
    </>
  );
};

export default Projects;
