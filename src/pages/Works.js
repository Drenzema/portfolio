import "../assets/allpages/Works.css";
import StatsGG from "../assets/images/statsGG.png";
import Stitch from "../assets/images/stitch.png";
import Grocery from "../assets/images/grocery.png";
import Pixzels from "../assets/images/Pixzels.png";
import image2 from "../assets/images/image 5.png";
import image3 from "../assets/images/image 6.png";

import React from "react";
import Card from "../components/Card";
import { Element } from "react-scroll";

const Works = () => {
  const works = [
    {
      title: "Stitch App",
      description:
        "Capstone project called Stitch, a web app for an outdoor garment repair company named Rugged Thread",
      imgUrl: Stitch,
    },
    {
      title: "Grocery Calculator",
      description: "A Kotlin based grocery calculator interacting with the Stripe API",
      imgUrl: Grocery,
    },
    {
      title: "Pixzels",
      description: "A web app which intakes images, groups and then uses machine learning to label them.",
      imgUrl: Pixzels,
    },
    {
      title: "StatsGG App",
      description: "A web app aimed at gaming enthusiasts as a way to view their favorite games, teams, and players",
      imgUrl: StatsGG,
    },
    {
      title: "Future Projects?",
      description: "Placeholder for future projects",
      imgUrl: image2,
    },
    {
      title: "Future Projects?",
      description: "Placeholder for future projects",
      imgUrl: image3,
    },
  ];

  return (
    <Element className="works container" name="works">
      <h1>past works</h1>
      <div className="cards">
        {works.map((work, index) => (
          <Card
            key={index}
            title={work.title}
            description={work.description}
            imageUrl={work.imgUrl}
            index={index}
          />
        ))}
      </div>
    </Element>
  );
};

export default Works;
