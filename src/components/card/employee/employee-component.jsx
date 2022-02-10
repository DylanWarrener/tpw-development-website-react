import React from "react";

// Stylesheet
import "./employee-component.scss";

const EmployeeCard = (props) => {
  return (
    <div
      className="employee-card"
      style={{
        background: `url(${props.src})`,
      }}
    >
      <div className="employee-info-container">
        <h2 className="name">{props.name}</h2>
        <h3 className="title">{props.title}</h3>
      </div>
    </div>
  );
};

export default EmployeeCard;
