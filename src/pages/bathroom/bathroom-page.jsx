import React from "react";

// Components
import CanvasWithTitleSubtitleButton from "../../components/landing-page/others/canvas_with_title_subtitle_button-component";

// Stylesheet
import "./bathroom-page.scss";

const BathroomPage = ({ images }) => {
  return (
    <div id="bathroom-container">
      <CanvasWithTitleSubtitleButton
        title="WE DEAL WITH"
        italic="BATHROOMS"
        subtitle="We will deal with any query you have."
        btnText="SEE OUR WORK"
        src={images.landingPage}
      />
      <p>This is the content</p>
    </div>
  );
};

export default BathroomPage;
