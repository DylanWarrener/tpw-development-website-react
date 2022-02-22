import React from "react";

// Components
import CanvasWithTitleSubtitleButton from "../../components/landing-page/others/canvas_with_title_subtitle_button-component";
import EmployeeCard from "../../components/card/employee/employee-component";

// Image
import Face from "../../assets/static/temp/face.jpg";

// Style sheet
import "./about-page.scss";

const AboutPage = (props) => {
  return (
    <div id="about-container">
      <CanvasWithTitleSubtitleButton
        title="WE ARE HERE TO"
        italic="HELP"
        subtitle="Want to know who is part of our team?"
        btnText="TAKE A LOOK"
        src={props.images.landingPage}
      />
      <div id="about-content-container">
        <h1 id="title">OUR TEAM</h1>
        <div id="employee-container">
          <EmployeeCard
            src={Face}
            name="Tom Wintle"
            title="Managing Director"
          />
          <EmployeeCard
            src={Face}
            name="Tom Wintle"
            title="Managing Executive"
          />
          <EmployeeCard
            src={Face}
            name="Tom Wintle"
            title="Electrical Engineer"
          />
          <EmployeeCard
            src={Face}
            name="Tom Wintle"
            title="Electrical Engineer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
