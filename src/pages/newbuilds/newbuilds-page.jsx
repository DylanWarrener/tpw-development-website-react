import React from 'react';

// Components 
import CanvasWithTitleSubtitleButton from '../../components/landing-page/others/canvas_with_title_subtitle_button-component';

// Stylesheet
import './newbuilds-page.scss';

const NewBuildsPage = ({ images }) => {
    return (
        <div id='newbuild-container'>
            <CanvasWithTitleSubtitleButton 
                title='THIS IS THE TITLE'
                subtitle='Want a kitchen? See our collection.'
                btnText='SEE OUR WORK'
                src={images.landingPage}
            />
        </div>
    );
}

export default NewBuildsPage;