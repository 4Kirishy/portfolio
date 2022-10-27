import { FaGithub, FaTelegram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Socials.scss";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <motion.div
      className="socials"
      initial={{ bottom: -500, opacity: 0 }}
      animate={{ bottom: 20, opacity: 1 }}
      exit={{ bottom: -500, opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <ul className="socialsList">
        <li className="socialsItem">
          <a
            href="https://github.com/4Kirishy"
            target="_blank"
            rel="noreferrer"
            className="socialsLinkTo"
          >
            <FaGithub />
          </a>
        </li>
        <li className="socialsItem">
          <a
            href="https://telegram.me/mold_in"
            target="_blank"
            rel="noreferrer"
            className="socialsLinkTo"
          >
            <FaTelegram />
          </a>
        </li>
        <li className="socialsItem">
          <a
            href="https://www.linkedin.com/in/kyrylo-teplynskyi-7646b822b/"
            target="_blank"
            rel="noreferrer"
            className="socialsLinkTo"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="socialsItem">
          <a
            href="https://twitter.com/Kirishy4"
            target="_blank"
            rel="noreferrer"
            className="socialsLinkTo"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Socials;
