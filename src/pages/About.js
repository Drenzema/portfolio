import "../assets/allpages/About.css";
import avatar from "../assets/images/avatar.svg";
import mexflag from "../assets/images/mexican-flag.svg";
import usflag from "../assets/images/american-flag.svg";
import location from "../assets/images/location.svg";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: headingRef, inView: headingIsVisible } = useInView({});
  const { ref: avatarRef, inView: avatarIsVisible } = useInView({});
  const { ref: aboutRef, inView: aboutIsVisible } = useInView({});
  return (
    <>
      <div className="about container">
        <div
          className={`about-image ${avatarIsVisible ? "animate-slideIn" : ""}`}
          id="about"
          ref={avatarRef}
        >
          <img className="avatar" src={avatar} alt="My avatar" />
          <p className="location">
            Keizer, OR{" "}
            <span>
              {" "}
              <img className="location" src={location} alt="My location" />
            </span>
          </p>
        </div>

        <div className="about-details">
          <h1
            className={`${headingIsVisible ? "about-heading" : ""}`}
            ref={headingRef}
          >
            about me
          </h1>
          <p
            className={`${aboutIsVisible ? "animate-fadeIn-fast" : ""}`}
            ref={aboutRef}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <span
            className={`flags ${aboutIsVisible ? "animate-fadeIn-fast" : ""}`}
          >
            <img className="mexflag" src={mexflag} alt="Mexican flag" />
            <img className="usflag" src={usflag} alt="USA flag" />
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
