import React, { useState } from "react";
import images from "../images/index";

const Card = ({ post }) => {
  const { location, title, content } = post;
  const [showAllContent, setShowAllContent] = useState(false);

  let fixedLocation = location.toLowerCase().replace(" ", "-");

  const toggleContent = () => {
    setShowAllContent(!showAllContent);
  };

  return (
    <div className="post">
      <img
        src={images[fixedLocation]}
        alt={`Image of ${location}`}
        className="post-image-height"
      />
      <h6>{title}</h6>
      <p>{location}</p>
      <p>{showAllContent ? content : content.slice(0, 100) + "..."}</p>
      {content.length > 100 && (
        <button className="btn" onClick={toggleContent}>
          {showAllContent ? "Show Less" : "Go to post"}
        </button>
      )}
    </div>
  );
};

export default Card;
