import React from 'react';

// Components 
import CanvasWithTitleSubtitleButton from '../../components/landing-page/others/canvas_with_title_subtitle_button-component';

// Stylesheet
import './refurbishment-page.scss';

const RefurbishmentPage = ({ images }) => {
    return (
        <div id='refurbishment-container'>
            <CanvasWithTitleSubtitleButton 
                title='THIS IS THE TITLE'
                subtitle='Want a kitchen? See our collection.'
                btnText='SEE OUR WORK'
                src={images.landingPage}
            />
        </div>
    );
}

export default RefurbishmentPage;