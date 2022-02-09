import React from "react";

// Components
import CustomButton from "../../components/form/buttons/submit_button-component";

// Style sheet
import "./home-page.scss";

const HomePage = (props) => {
  return (
    <div id="home-container">
      <div id="content-container">
        <div id="content">
          <h1 id="title">
            CHANGE IS NOT BY CHANCE, BUT <b id="highlight">BY CHOICE!</b>
          </h1>
          <div id="bottom">
            <h3 id="subtitle">
              Assemble your dream home today with our team of experts.
              <br></br>
              Do not let your visions go to waste.
            </h3>
            <CustomButton id="button">GET IN TOUCH?</CustomButton>
          </div>
        </div>
      </div>
      <div id="chevron-container">
        <i id="chevron" />
      </div>
    </div>
  );
};

export default HomePage;
