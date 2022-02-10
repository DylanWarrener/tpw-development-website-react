import React from "react";

// Stylesheet
import "./work-component.scss";

const WorkCard = (props) => {
  return (
    <div
      className="card-container"
      style={{
        background: `url(${props.src})`,
      }}
    >
      <div className="before-and-after-container">
        <div className="before">before image</div>
        <div className="after">after image</div>
      </div>
    </div>
  );
};

export default WorkCard;
