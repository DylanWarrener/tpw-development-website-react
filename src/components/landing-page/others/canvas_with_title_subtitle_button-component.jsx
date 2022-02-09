import React from "react";

import CustomButton from "../../form/buttons/submit_button-component";

// Stylesheet
import "./canvas_with_title_subtitle_button-component.scss";

const CanvasWithTitleSubtitleButton = (props) => {
  return (
    <div
      className="canvas-container"
      style={{
        background: `url(${props.src}) no-repeat`,
      }}
    >
      <div className="content-container">
        <div className="content">
          <h1 className="title">
            {props.title} <b className="highlight">{props.italic}?</b>
          </h1>
          <div className="subtitle-button-container">
            <h3 className="subtitle">{props.subtitle}</h3>
            <CustomButton>{props.btnText}</CustomButton>
          </div>
        </div>
      </div>
      <div id="chevron-container">
        <i id="chevron" />
      </div>
    </div>
  );
};

export default CanvasWithTitleSubtitleButton;
