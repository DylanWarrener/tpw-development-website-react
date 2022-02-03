import React from 'react';

// Components
import CanvasWithTitleSubtitleButton from '../../components/landing-page/others/canvas-with-title-subtitle-button';

// Style sheet 
import './about.scss';

const AboutPage = ({ images }) => {
    return (
        <div id="about-container">
            <CanvasWithTitleSubtitleButton 
                title='WE ARE HERE TO HELP'
                subtitle='Want to know who is part of our team?'
                btnText='FIND US'
                src={images.landingPage}
            />
        </div>
    );
}

export default AboutPage;