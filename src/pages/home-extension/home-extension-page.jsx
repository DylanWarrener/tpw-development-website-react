import React from "react";

import CanvasWithTitleSubtitleButton from "../../components/landing-page/others/canvas_with_title_subtitle_button-component";

// Stylesheet
import "./home-extension-page.scss";

const ExtensionPage = ({ images }) => {
  return (
    <div id="extension-container">
      <CanvasWithTitleSubtitleButton
        title="WE DEAL WITH"
        italic="EXTENSIONS"
        subtitle="We will deal with any query you have."
        btnText="SEE OUR WORK"
        src={images.landingPage}
      />
      <p>This is the content</p>
    </div>
  );
};

export default ExtensionPage;
