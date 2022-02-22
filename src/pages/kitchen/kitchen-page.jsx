import React from "react";

// Components
import CanvasWithTitleSubtitleButton from "../../components/landing-page/others/canvas_with_title_subtitle_button-component";
import WorkCard from "../../components/card/work/work-component";

// Image
import Face from "../../assets/static/temp/face.jpg";

// Stylesheet
import "./kitchen-page.scss";

const KitchenPage = (props) => {
  return (
    <div id="kitchen-container">
      <CanvasWithTitleSubtitleButton
        title="WE DEAL WITH"
        italic="KITCHENS"
        subtitle="We will deal with any query you have."
        btnText="SEE OUR WORK"
        src={props.images.landingPage}
      />
      <div id="kitchen-content">
        <div id="work-card-container">
          <WorkCard src={Face} alt="kitchen" />
        </div>
      </div>
    </div>
  );
};

export default KitchenPage;
