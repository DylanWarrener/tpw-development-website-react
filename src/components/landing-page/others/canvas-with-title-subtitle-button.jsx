import React from 'react';

import CustomButton from '../../form/buttons/submit-button';

// Stylesheet
import './canvas-with-title-subtitle-button.scss';

const CanvasWithTitleSubtitleButton = ({ title, subtitle, btnText, src }) => {
    return (
        <div 
            className='canvas-container'
            style={{
                backgroundImage: `url(${src})`
            }}
        >
            <div className='content-container'>
                <div className='content'>
                    <h1 className='title'>{title} <b className='highlight'>BY CHOICE</b></h1>
                    <div className='subtitle-button-container'>
                        <h3 className='subtitle'>{subtitle}</h3>
                        <CustomButton>{btnText}</CustomButton>
                    </div>
                </div>
            </div>
            <div id='chevron-container'><i id='chevron' /></div>
        </div>
    );
};

export default CanvasWithTitleSubtitleButton;