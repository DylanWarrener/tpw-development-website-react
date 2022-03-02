import React from "react";

// Components
import CanvasWithTitleSubtitleButton from "../../components/landing-page/canvas_with_title_subtitle_button-component";
import BeforeAndAfterJobCard from "../../components/card/work/before_and_after_job-card";

import Image from "../../assets/static/temp/image.png";
import KitchenImage from "../../assets/static/temp/kitchen.jpg";

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
        <BeforeAndAfterJobCard
          before={KitchenImage}
          after={KitchenImage}
          alt="kitchen"
        />
      </div>
    </div>
  );
};

export default KitchenPage;
