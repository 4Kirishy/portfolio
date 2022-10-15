import { FaGithub, FaTelegram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Socials.scss";

const Socials = () => {
  return (
    <div className="socials">
      <ul className="socialsList">
        <li className="socialsItem">
          <a
            href="https://github.com/4Kirishy"
            target="_blank"
            className="socialsLinkTo"
          >
            <FaGithub />
          </a>
        </li>
        <li className="socialsItem">
          <a
            href="https://telegram.me/mold_in"
            target="_blank"
            className="socialsLinkTo"
          >
            <FaTelegram />
          </a>
        </li>
        <li className="socialsItem">
          <a
            href="https://www.linkedin.com/in/kyrylo-teplynskyi-7646b822b/"
            target="_blank"
            className="socialsLinkTo"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="socialsItem">
          <a
            href="https://twitter.com/Kirishy4"
            target="_blank"
            className="socialsLinkTo"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>

      {/* <a
        href="mailto:kyryloteplynskyi@gmail.com"
        target="_blank"
        className="socialsEmail"
      >
        kyryloteplynskyi@gmail.com
      </a> */}
    </div>
  );
};

export default Socials;
