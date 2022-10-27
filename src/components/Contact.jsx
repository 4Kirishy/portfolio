import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import AnimationWrapper from "../layouts/AnimationWrapper";
import Socials from "./Socials";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_smu9st4",
        "template_y7vbh59",
        form.current,
        "pi5bDI-P0Ry3l7iPc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setUserName("");
    setUserEmail("");
    setUserMessage("");
  };
  return (
    <>
      <AnimationWrapper>
        <section className="contact">
          <div className="contactContainer">
            <h2 className="contactTitle">Contact Me.</h2>
            <p className="contactSubText">
              Get in touch or shoot me an email directly on{" "}
              <a
                href="mailto:kyryloteplynskyi@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                kyryloteplynskyi@gmail.com
              </a>
            </p>

            <form ref={form} className="contactEmailForm" onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Name"
                name="user_name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </AnimationWrapper>
      <Socials />
    </>
  );
};

export default Contact;
