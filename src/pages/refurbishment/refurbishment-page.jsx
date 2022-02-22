import React from "react";

// Components
import CanvasWithTitleSubtitleButton from "../../components/landing-page/others/canvas_with_title_subtitle_button-component";

// Stylesheet
import "./refurbishment-page.scss";

const RefurbishmentPage = ({ images }) => {
  return (
    <div id="refurbishment-container">
      <CanvasWithTitleSubtitleButton
        title="WE DEAL WITH"
        italic="REFURBISHMENTS"
        subtitle="We will deal with any query you have."
        btnText="SEE OUR WORK"
        src={images.landingPage}
      />
      <p>This is the content</p>
    </div>
  );
};

export default RefurbishmentPage;
