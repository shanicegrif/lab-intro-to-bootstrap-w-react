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
    <div className="card" >
      <img
        className="rounded" 
        src={images[fixedLocation]}
        alt={`Image of ${location}`}
        style={{height:"250px"}}
      />
      <div class="card-body d-block">
        <h6>{title}</h6>
        <p>{location}</p>
        <p>{showAllContent ? content : content.slice(0, 100) + "..."}</p>
        {content.length > 100 && (
          <button className="btn btn-warning float-sm-end" onClick={toggleContent}>
            Go to Post ▶️
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
