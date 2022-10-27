import { Link } from "react-router-dom";
import AnimationWrapper from "../layouts/AnimationWrapper";
import "./Home.scss";
import Socials from "./Socials";

const Home = () => {
  return (
    <>
      <AnimationWrapper>
        <section className="home">
          <div className="homeWrapper">
            <div className="homeContentBox">
              <p className="homeGreet">Hi, my name is</p>
              <h1 className="homeName">Kyrylo Teplynskyi</h1>
              <p className="homeWho">
                I am a Frontend Developer{" "}
                <span>
                  with over a year of <Link to="../projects">experience</Link>
                </span>
              </p>
              <div className="homeBtns">
                <Link to="projects">projects</Link>
                <Link to="contact">contact me</Link>
              </div>
            </div>
          </div>
        </section>
      </AnimationWrapper>
      <Socials />
    </>
  );
};

export default Home;
