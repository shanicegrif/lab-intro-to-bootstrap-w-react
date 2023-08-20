import React, { useState } from "react";
import images from "../images/index";

const Card = ({ post }) => {
  const { location, title, content } = post;
  const [showAllContent, setShowAllContent] = useState(false);

  const toggleContent = () => {
    setShowAllContent(!showAllContent);
  };

  return (
    <div className="card">
      <img src={images[location]} alt={`Image of ${location}`} />
      <h6>{title}</h6>
      <p>{location}</p>
      <p>{showAllContent ? content : content.slice(0, 100) + "..."}</p>
      {content.length > 100 && 
      <button onClick={toggleContent}>{showAllContent ? "Show Less" : "Go to post"}</button>}
    </div>
  );
};

export default Card;
