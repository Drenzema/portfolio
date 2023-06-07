import React from "react";
import "./Card.css";
import { useInView } from "react-intersection-observer";

const Card = ({ title, description, imageUrl, index }) => {
  const { ref: cardRef, inView: cardIsVisible } = useInView({});
  /* Adding staggared effect through an animation delay of each index  */
  const animationDelay = (index + 1) * 250 + "ms";
  return (
    <div
      className={`card ${cardIsVisible ? "animate-staggredSlideIn" : ""}`}
      ref={cardRef}
      style={{ animationDelay }}
    >
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
