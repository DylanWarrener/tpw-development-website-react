import React from "react";

// Components
import CanvasWithTitleSubtitleButton from "../../components/landing-page/others/canvas_with_title_subtitle_button-component";

// Stylesheet
import "./newbuilds-page.scss";

const NewBuildsPage = ({ images }) => {
  return (
    <div id="newbuild-container">
      <CanvasWithTitleSubtitleButton
        title="WE DEAL WITH"
        italic="NEWBUILDS"
        subtitle="We will deal with any query you have."
        btnText="SEE OUR WORK"
        src={images.landingPage}
      />
      <p>This is the content</p>
    </div>
  );
};

export default NewBuildsPage;
