import React from "react";

// Stylesheet
import "./work-component.scss";

const WorkCard = (props) => {
  return (
    <div className="card-container">
      <div className="picture-container">
        <img
          src={props.src}
          className="before"
          alt={`before ${props.alt} apperance`}
        />
        <img
          src={props.src}
          className="after"
          alt={`after ${props.alt} apperance`}
        />
      </div>
    </div>
  );
};

export default WorkCard;
