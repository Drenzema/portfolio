import "../assets/allpages/Works.css";
import image1 from "../assets/images/image 4.png"
import image2 from "../assets/images/image 5.png"
import image3 from "../assets/images/image 6.png"
import React from "react";
import Card from "../components/Card";

const Works = () => {
  const works = [
    {
      title: "Test project",
      description: "This is my test project",
      imgUrl: image1,
    },
    {
      title: "Test project",
      description: "This is my test project",
      imgUrl: image2  ,
    },
    {
      title: "Test project",
      description: "This is my test project",
      imgUrl: image3,
    },
    {
      title: "Test project",
      description: "This is my test project",
      imgUrl: image1,
    },
    {
      title: "Test project",
      description: "This is my test project",
      imgUrl: image2,
    },
    {
      title: "Test project",
      description: "This is my test project",
      imgUrl: image3,
    },
  ];

  return (
    <div className="works container" id="works">
      <h1>past works</h1>
      <div className="cards">
        {works.map((work, index) => (
          <Card
            key={index}
            title={work.title}
            description={work.description}
            imageUrl={work.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
