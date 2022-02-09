import React from "react";

// SVG
import { ReactComponent as Arrow } from "../../../assets/static/icons/arrow-right.svg";

// Stylesheet
import "./submit_button-component.scss";

const CustomSubmitButton = (props) => {
  return (
    <button id="button" type={props.type} onClick={props.onClick}>
      {props.children}
      <Arrow id="arrow" />
    </button>
  );
};

export default CustomSubmitButton;
