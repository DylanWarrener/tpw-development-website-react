import React from 'react';

// Components 
import CanvasWithTitleSubtitleButton from '../../components/landing-page/others/canvas-with-title-subtitle-button';

// Stylesheet
import './kitchen.scss';

const KitchenPage = ({ images }) => {
    return (
        <div id='kitchen-container'>
            <CanvasWithTitleSubtitleButton 
                title='THIS IS THE TITLE'
                subtitle='Want a kitchen? See our collection.'
                btnText='SEE OUR WORK'
                src={images.landingPage}
            />
        </div>
    );
}

export default KitchenPage;