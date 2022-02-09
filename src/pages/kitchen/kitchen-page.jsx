import React, { Component } from "react";

// Components
import CanvasWithTitleSubtitleButton from "../../components/landing-page/others/canvas_with_title_subtitle_button-component";

// Stylesheet
import "./kitchen-page.scss";

class KitchenPage extends Component {
  render() {
    return (
      <div id="kitchen-container">
        <CanvasWithTitleSubtitleButton
          title="LOOKING TO BUILD A"
          italic="KITCHEN"
          subtitle="We will deal with any query you have."
          btnText="SEE OUR WORK"
          src={this.props.images.landingPage}
        />
        <p>This is the content</p>
      </div>
    );
  }
}

export default KitchenPage;
