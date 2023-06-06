import React from "react";
import ScrollEffects from "../components/ScrollEffects";
import "../assets/allpages/Home.css";

const Home = () => {
  return (
    <div className="home container">
      <ScrollEffects />
      <div className="name">
        <p className="first-name animate-slideLeft">Derek</p>
        <p className="last-name animate-slideRight">Renzema</p>
      </div>

      <h2 className="name-details animate-fadeIn">
        OSU undergrad with web & mobile dev focus
      </h2>
    </div>
  );
};

export default Home;
