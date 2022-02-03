import React from 'react';

import CanvasWithTitleSubtitleButton from '../../components/landing-page/others/canvas-with-title-subtitle-button';

// Stylesheet
import './home-extension.scss';

const ExtensionPage = ({ images }) => {
    return (
        <div id='extension-container'>
            <CanvasWithTitleSubtitleButton 
                title='THIS IS THE TITLE'
                subtitle='Want a kitchen? See our collection.'
                btnText='SEE OUR WORK'
                src={images.landingPage}
            />
        </div>
    );
}

export default ExtensionPage;