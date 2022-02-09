import React from 'react';

// Components 
import CanvasWithTitleSubtitleButton from '../../components/landing-page/others/canvas_with_title_subtitle_button-component';

// Stylesheet
import './bathroom-page.scss';

const BathroomPage = ({ images }) => {
    return (
        <div id='bathroom-container'>
            <CanvasWithTitleSubtitleButton 
                title='THIS IS THE TITLE'
                subtitle='Want a bathroom? See our collection.'
                btnText='SEE OUR WORK'
                src={images.landingPage}
            />
        </div>
    );
}

export default BathroomPage;