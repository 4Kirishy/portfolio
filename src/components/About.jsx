import "./About.scss";
import cv from "../data/cv.pdf";
import { Link } from "react-router-dom";
import AnimationWrapper from "../layouts/AnimationWrapper";
import Socials from "./Socials";

const About = () => {
  return (
    <>
      <AnimationWrapper>
        <section className="about">
          <div className="aboutContainer">
            <h2 className="aboutTitle">About me.</h2>
            <p className="aboutText">
              My name is Kyrylo, I’m from Ukraine. I am Frontend Developer with
              over a year of experience. I’ve worked with such technologies as
              html, css / scss, javascript, react, git, figma. I chose web
              development because I am interested in writing websites and web
              applications. In the future I see myself as a full-stack developer
              as well as a web designer. I am a fast learner, easy to
              communicate, interested in developing myself and the people I work
              with. Check out my
              <Link to="../projects" className="projectsLink">
                {" "}
                latest projects
              </Link>{" "}
              and{" "}
              <a href={cv} target="_blank" rel="noreferrer" className="cvLink">
                my resume
              </a>
              .
            </p>
          </div>
        </section>
      </AnimationWrapper>
      <Socials />
    </>
  );
};

export default About;
