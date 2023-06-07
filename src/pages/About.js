import "../assets/allpages/About.css";
import avatar from "../assets/images/pic-me.jpeg";
import mexflag from "../assets/images/mexican-flag.svg";
import usflag from "../assets/images/american-flag.svg";
import location from "../assets/images/location.svg";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

const About = () => {
  const { ref: headingRef, inView: headingIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: avatarRef, inView: avatarIsVisible } = useInView();
  const { ref: aboutRef, inView: aboutIsVisible } = useInView();
  return (
    <>
      <Element name="about" className="about container">
        <div
          className={`about-image ${
            avatarIsVisible ? "animate-slideIn-fast" : ""
          }`}
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
            Hi, I am Derek. I am an aspiring web and mobile developer currently
            attending Oregon State University. Throughout my coding career I’ve
            acquired skills in C, C++, Python, a little in Kotlin/Java,
            JavaScript, CSS, HTML, etc.
          </p>
          <p className={`${aboutIsVisible ? "animate-fadeIn-fast" : ""}`}>
            I was born and raised in Mexico where I lived 15 years of my life before moving
            the United States. I also have great passion for the outdoors; fishing,
            hunting, camping, and so on.
          </p>
          <span
            className={`flags ${aboutIsVisible ? "animate-fadeIn-fast" : ""}`}
          >
            <img className="mexflag" src={mexflag} alt="Mexican flag" />
            <img className="usflag" src={usflag} alt="USA flag" />
          </span>
        </div>
      </Element>
    </>
  );
};

export default About;
